import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { StoredLocation } from '../_models/storedLocation.model';
import { LocationTarget } from '../_models/locationTarget.model';
 
@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  storedLocations = new BehaviorSubject([]);
  locationTargets = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadStoredLocations();
          //this.loadTargets();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  loadStoredLocations(){
      return this.database.executeSql('SELECT * FROM storedLocation', [])
                .then(data => {
                    let storedLocations: StoredLocation[] = [];

                    if(data.rows.length > 0){
                        for(var i = 0; i < data.rows.length; i++){
                            storedLocations.push({
                                locationId: data.rows.item(i).locationId,
                                useAsStartLocation: data.rows.item(i).useAsStartLocation,
                                displayName: data.rows.item(i).displayName,
                                stationName: data.rows.item(i).stationName,
                                apiIdentifier: data.rows.item(i).apiIdentifier,
                                longitude: data.rows.item(i).longitude,
                                latitude: data.rows.item(i).latitude
                            });
                        }
                    }
                    this.storedLocations.next(storedLocations);
                });
  }

  addStoredLocation(location:StoredLocation){
      let params = [location.useAsStartLocation, location.displayName, location.stationName, location.apiIdentifier, location.longitude, location.latitude];
      let sql = 'INSERT INTO storedLocation (useAsStartLocation, displayName, stationName, apiIdentifier, longitude, latitude) VALUES(?, ?, ?, ?, ?, ?)';

      return this.database.executeSql(sql, params).then(_ => this.loadStoredLocations());
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getStoredLocations(): Observable<StoredLocation[]> {
    return this.storedLocations.asObservable();
  }
 
  getLocationTargets(): Observable<LocationTarget[]> {
    return this.locationTargets.asObservable();
  }
}