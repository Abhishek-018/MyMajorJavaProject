import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComplaintService } from 'src/app/utility/complaint.service';
import { EventService } from 'src/app/utility/event.service';

@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.css']
})
export class RaiseComplaintComponent implements OnInit {
  msg:any;
  events:any;
  data:any;
 //selectedOption="1";
 // defaultValue="default";
  addComplaintForm :FormGroup= this._fb.group({

    // firstName: [''],
    // lastName: [''],
    // email: [''],
    // password: [''],
     event: [''],
     complaintDescription:[''],
     approval:[''],
    //  registrationdemo:['']
 
   }
   );

  constructor(private _fb:FormBuilder,private _complaintService:ComplaintService,private _eventService:EventService) {
    this.events = [];
   }

  ngOnInit(): void {

      this._eventService.getData().subscribe(data => {console.log(data);
      this.events = data})
  }

  addComplaint(){
    console.log(this.addComplaintForm.value);
    // console.log(this.addEventForm.value.categoryId);
    // console.log('category id==', this.addEventForm.value.categoryId);
    // console.log('offer id==', this.addEventForm.value.offerId);
    console.log(this.addComplaintForm.value.eventPrice);
    this._complaintService.addComplaint(this.addComplaintForm.value).subscribe(data => {console.log(data); this.msg = data;
    });
  
  }

}
