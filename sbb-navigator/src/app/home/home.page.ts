import { Component } from '@angular/core';
import { StoredLocation } from '../_models/storedLocation.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentLocation:StoredLocation;
  storedLocations:StoredLocation[];

  connections:any[];


  constructor(){
    this.currentLocation = {
      locationId: 1,
      useAsStartLocation:true,
      displayName:"Home",
      stationName:"Zürich Oerlikon",
      apiIdentifier:"home",
      longitude:1,
      latitude:1
    }

    this.storedLocations = [
      {
        locationId: 1,
        useAsStartLocation:true,
        displayName:"Home",
        apiIdentifier:"home",
        stationName:"Zürich Oerlikon",
        longitude:1,
        latitude:1
      },
      {
        locationId: 1,
        useAsStartLocation:true,
        displayName:"Work",
        apiIdentifier:"work",
        stationName:"Zürich HB",
        longitude:1,
        latitude:1
      }
    ]

    this.connections

    console.log("initialized");
    console.log(this.storedLocations);
  }

}
