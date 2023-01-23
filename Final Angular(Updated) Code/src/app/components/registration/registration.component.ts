import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { EventCategoryServiceService } from 'src/app/utility/event-category-service.service';
import { EventService } from 'src/app/utility/event.service';
import { RegisterService } from 'src/app/utility/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    message:any;

    registerForm:FormGroup=this._fb.group({
    // categoryName:[''],
    firstName:['',[Validators.required, Validators.minLength(5)]],
    lastName:['',[Validators.required, Validators.minLength(5)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8), Validators.maxLength(24)]],
    role:['',[Validators.required]],
    contactNumber:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
   
  })

  constructor(private _fb:FormBuilder,private _eventService:EventService, private _router:Router,private _registerService:RegisterService) { }

  ngOnInit(): void {
  }

  Register()
  {
    this._registerService.Register(this.registerForm.value).subscribe(data =>{console.log(data); this.message = data});
    console.log(this.registerForm.value);
  }



}
