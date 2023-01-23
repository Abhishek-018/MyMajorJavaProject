import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/utility/category.service';
import { EventService } from 'src/app/utility/event.service';
import { OfferService } from 'src/app/utility/offer.service';
import { RegisterService } from 'src/app/utility/register.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  msg: any;
  categories: any;
  offers: any;
  
  registerId: any
  register: any;

  

  addEventForm: FormGroup = this._fb.group({

    eventName: [''],
    eventDate: [''],
    eventLocation: [''],
    eventDetails: [''],
    eventPrice: [''],
    category: [''],
    offer: [''],

    // organizer:['']
    registrationdemo: ['']
  });

  constructor(private _fb: FormBuilder,
    private _eventService: EventService,
    private _router: Router,
    private _categoryService: CategoryService,
    private _offerService: OfferService,
    private _registerService: RegisterService) {

    this.categories = [];
    this.offers = [];
   

  }



  currentDate: any = new Date();
  ngOnInit(): void {

    

    this.registerId = sessionStorage.getItem('registrationId');
    console.log("ss: ", this.registerId);

    console.log("get user by id method", this.registerId);

    this.register = this._registerService.getUserById(this.registerId).subscribe((data: any) => {
      console.log("userdata : ", data);
      this.register = data;
    });
    console.log(this.register);

    this._categoryService.getData().subscribe(data => {
      console.log(data);
      this.categories = data;
    });

    this._offerService.getData().subscribe(data => {
      console.log(data);
      this.offers = data;
    })
  }

  addEvent() {
    console.log(this.addEventForm.value);
  
    this._eventService.addEvent(this.addEventForm.value).subscribe(data => {
      console.log(data); this.msg = data;

     
    });

    setTimeout(() => {
      this._router.navigate(['/events']);
    }, 1000);
  }

  cancel() {
    this._router.navigate(['/events']);
  }


}
