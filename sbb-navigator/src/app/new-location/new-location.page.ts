import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from 'rxjs';
import { StoredLocation } from '../_models/storedLocation.model';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  searchTerm:string;
  suggestions:StoredLocation[];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchStations(){
    if(this.searchTerm.length < 3)
      return;

    this.suggestions = this.api.SearchStation(this.searchTerm);
    console.log(this.suggestions);
  }
}
