import { Component } from '@angular/core';
import { StoredLocation } from '../_models/storedLocation.model';
import { StorageService } from '../_services/storage.service';
import { map, filter, scan } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LocationTarget } from '../_models/locationTarget.model';
import { ConnectionComponent} from '../_components/connection.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  currentLocation:StoredLocation;
  storedLocations:Observable<StoredLocation[]>;
  locationTargets:Observable<LocationTarget[]>;

  currentTargets:StoredLocation[];

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
        this.locationTargets = this.db.getLocationTargets();

        console.log(this.storedLocations);
        console.log(this.currentLocation);
      }
    })
  }
}
