import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoredLocation } from '../_models/storedLocation.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService{

    constructor(private http:HttpClient){ }
    
    SearchStation(query: string): StoredLocation[] {
        let stations:StoredLocation[] = [];

        this.http.get<any>('http://transport.opendata.ch/v1/locations?query='+query+'&type=station')
        .toPromise()
        .then(data => {
            console.log(data.stations);
            for(let i = 0; i< data.stations.length; i++){
                stations.push({
                    locationId:0,
                    useAsStartLocation:true,
                    displayName: data.stations[i].name,
                    stationName: data.stations[i].name,
                    apiIdentifier: data.stations[i].id,
                    longitude: data.stations[i].coordinate.y,
                    latitude: data.stations[i].coordinate.x
                });
            }
        })
        .catch(e => console.log(e));

        return stations;
    }    
    
    GetConnection(from: string, to: string) {
        throw new Error("Method not implemented.");
    }
}