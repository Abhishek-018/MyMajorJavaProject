import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/utility/complaint.service';
import { EventService } from 'src/app/utility/event.service';
import { RegisterService } from 'src/app/utility/register.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  events:any;
  data:any;
  msg:any;
  registerId: any
  register: any;
  organizerId:any
  constructor(private _registerService: RegisterService,private _router:Router, private _fb:FormBuilder,private _complaintService:ComplaintService,private _eventService:EventService) { 
    this.events = [];
  }

  addComplaintForm:FormGroup = this._fb.group({
    event: [''],
    complaintDescription:[''],
    approval:[''],
    registrationdemo:[''],
    organizerId:['']
  })

  ngOnInit(): void {
    this.registerId = sessionStorage.getItem('registrationId');
    console.log("ss: ", this.registerId);

    console.log("get user by id method", this.registerId);
    console.log("get organizer by id method", this.organizerId);

    this.register = this._registerService.getUserById(this.registerId).subscribe((data: any) => {
      console.log("userdata : ", data);
      this.register = data;
    });
    console.log(this.register);

    this._eventService.getData().subscribe(data => {console.log(data);
    this.events = data})
    
  }



  raiseComplaint()
  {
    console.log(this.addComplaintForm.value);
  
    console.log(this.addComplaintForm.value.eventPrice);
    this._complaintService.addComplaint(this.addComplaintForm.value).subscribe(data => {console.log(data); this.msg = data;
    });

    setTimeout(() => {
      this._router.navigate(['/viewUserComplaints']);
    }, 1000);

  }

  cancel(){
    this._router.navigate(['/viewUserComplaints']);
  }

}
