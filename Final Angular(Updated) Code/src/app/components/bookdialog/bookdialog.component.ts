import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/utility/event.service';
import { RegisterService } from 'src/app/utility/register.service';
import { UsereventrbookingService } from 'src/app/utility/usereventrbooking.service';

@Component({
  selector: 'app-bookdialog',
  templateUrl: './bookdialog.component.html',
  styleUrls: ['./bookdialog.component.css']
})
export class BookdialogComponent implements OnInit {
  id:any;
  events:any;
  msg:any;
  

  registerId: any
  register: any;
  organizerId:any;


  addBookingForm:FormGroup = this._fb.group({

    eventName:[''],
    offer:[''],
    eventPrice:[''],
    eventLocation:[''],
    eventDate:[''],
    eventDetails:[''],

    event:[''],
    status:[''],
    registrationdemo:[''],
    organizerId:['']

  
});
  constructor(private _registerService:RegisterService, private _router:Router,private _eventService:EventService,private _activatedRoute:ActivatedRoute,private _bookingService:UsereventrbookingService,private _fb:FormBuilder) {
    this.events=[];
   }

  ngOnInit(): void {
       this._activatedRoute.params.subscribe(params => {
       this.id = params['id'];
       this._eventService.getById(this.id).subscribe((res) => (this.events = res));
      console.log(this.events);
    })

    this.registerId = sessionStorage.getItem('registrationId');
    
    

    console.log("get user by id method", this.registerId);
    

      this.register = this._registerService.getUserById(this.registerId).subscribe((data: any) => {
      console.log("userdata : ",data);
      console.log("organizerId : ",this.events.organizerId);
      this.register = data;
    });
    console.log(this.register);
  }

  userBookingConfirm(){
    console.log(this.addBookingForm.controls['organizerId'].value);
    
    this._bookingService.userEventBooking(this.addBookingForm.value).subscribe({
      next:(res)=>{
        alert("Booking Added Successfully" );
        this._router.navigate(['/viewUserbookings']);

        
      },

      error:()=>{
        alert("Error while booking")
      }

    });
  }

  cancelNavigate(){
    this._router.navigate(['/viewUserEvent']);
  }

    
  
}
