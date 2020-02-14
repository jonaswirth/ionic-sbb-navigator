import { Component } from '@angular/core';
import { StoredLocation } from '../_models/location.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentLocation:StoredLocation;
  storedLocations:StoredLocation[];

  constructor(){
    this.currentLocation = {
      locationId: 1,
      useAsStartLocation:true,
      displayName:"Home",
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
        longitude:1,
        latitude:1
      },
      {
        locationId: 1,
        useAsStartLocation:true,
        displayName:"Work",
        apiIdentifier:"work",
        longitude:1,
        latitude:1
      }
    ]

    console.log("initialized");
    console.log(this.storedLocations);
  }

}
