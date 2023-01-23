import { Component, OnInit } from '@angular/core';
import { UsereventrbookingService } from 'src/app/utility/usereventrbooking.service';

@Component({
  selector: 'app-userbookinghistory',
  templateUrl: './userbookinghistory.component.html',
  styleUrls: ['./userbookinghistory.component.css']
})
export class UserbookinghistoryComponent implements OnInit {
  data:any;
  bookings:any
  displayedColumns: string[] = ['eventName','eventDate', 'eventPrice','offerName', 'offerDescription','status'];

  registerId:any;
  constructor(private _bookingService:UsereventrbookingService) { }

  ngOnInit(): void {
    this.registerId = sessionStorage.getItem('registrationId');
    console.log("userId: ", this.registerId);
    //this._bookingService.getData().subscribe(data =>{console.log(data); this.bookings = data})
    this._bookingService.getBookingById(this.registerId).subscribe(data =>{console.log(data); this.bookings = data})

  }

}

