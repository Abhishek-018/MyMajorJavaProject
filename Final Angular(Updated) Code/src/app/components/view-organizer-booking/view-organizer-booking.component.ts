import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsereventrbookingService } from 'src/app/utility/usereventrbooking.service';

@Component({
  selector: 'app-view-organizer-booking',
  templateUrl: './view-organizer-booking.component.html',
  styleUrls: ['./view-organizer-booking.component.css']
})
export class ViewOrganizerBookingComponent implements OnInit {
  bookings: any;
  data: any;
  organizerId:any;
  displayedColumns: string[] = ['eventName','eventDate', 'eventPrice','offerName', 'status', 'action'];
  constructor(private _bookingService: UsereventrbookingService, private _router:Router) { }

  ngOnInit(): void {
    
    this.organizerId = sessionStorage.getItem('registrationId');
    console.log("organizerId: ", this.organizerId);
    
    this._bookingService.getOrganizerBookingById(this.organizerId).subscribe(data =>{console.log(data); this.bookings = data})
    //this._bookingService.getData().subscribe(data =>{console.log(data); this.bookings = data})
  
  }

}
