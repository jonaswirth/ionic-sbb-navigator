import { Component } from '@angular/core';
import { Connection } from '../_models/connection.model';

@Component({
    selector: 'connection',
    templateUrl: './connection.component.html'
})
export class ConnectionComponent{
    connections:Connection[] = [
        {
            from:'Zürich Oerlikon',
            to: 'Zürich HB',
            platform:'33',
            departure: new Date(),
            delay:0,
            arrival: new Date(),
            direction: 'Hinwil'
        }
    ]

    currentDisplayConnection = this.connections[0];
}