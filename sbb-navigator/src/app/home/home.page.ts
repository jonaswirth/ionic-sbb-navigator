import { Component } from '@angular/core';
import { StoredLocation } from '../_models/storedLocation.model';
import { StorageService } from '../_services/storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentLocation:StoredLocation;
  storedLocations:Observable<StoredLocation[]>;

  connections:any[];


  constructor(private db: StorageService){ }

  ngOnInit(){
    console.log("init");
    this.db.getDatabaseState().subscribe(rdy => {
      console.log("ready");
      if(rdy){
        this.storedLocations = this.db.getStoredLocations();
        this.currentLocation = {
            locationId:1,
            useAsStartLocation:true,
            displayName:"Home",
            stationName:"Zürich HB",
            apiIdentifier:"zrh",
            longitude:8.538373,
            latitude:47.412320
        };
        console.log(this.storedLocations);
        console.log(this.currentLocation);
      }
    })
  }
}
