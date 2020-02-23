import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { StoredLocation } from '../_models/storedLocation.model';
import { LocationTarget } from '../_models/locationTarget.model';

export class MockStorageService{
    
    private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(true);
    storedLocations = new BehaviorSubject([
        {
            locationId:1,
            useAsStartLocation:true,
            displayName:"Home",
            stationName:"Zürich HB",
            apiIdentifier:"zrh",
            longitude:8.538373,
            latitude:47.412320
        },
        {
            locationId:2,
            useAsStartLocation:true,
            displayName:"Work",
            stationName:"Zürich Oerlikon",
            apiIdentifier:"oer",
            longitude:8.545368,
            latitude:47.412320
        }
    ]);
    
    locationTargets = new BehaviorSubject([
      {
        startId:1,
        targetId:2,
        orderIndex:1
      },{
        startId:2,
        targetId:1,
        orderIndex:1
      }
    ]);

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