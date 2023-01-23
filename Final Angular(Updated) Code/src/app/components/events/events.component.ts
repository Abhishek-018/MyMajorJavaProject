import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/utility/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  events: any;

  registerId:any;
  

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {

   

    this.registerId = sessionStorage.getItem('registrationId');
    console.log("ss: ", this.registerId);

   
   this._eventService.getEventById(this.registerId).subscribe(data => { console.log(data), this.events = data });



  }

  delete(eventId: number) {
    if (confirm('Are you sure to delete record? '))
      location.reload();
    this._eventService.delete(eventId).subscribe(data => { console.log(data) });
    location.reload();
  }

}
