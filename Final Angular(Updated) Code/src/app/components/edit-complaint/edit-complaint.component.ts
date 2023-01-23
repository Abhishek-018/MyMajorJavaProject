import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/utility/complaint.service';

@Component({
  selector: 'app-edit-complaint',
  templateUrl: './edit-complaint.component.html',
  styleUrls: ['./edit-complaint.component.css']
})
export class EditComplaintComponent implements OnInit {

  constructor(private _router:Router,private _route:Router,private _activatedRoute:ActivatedRoute,private _complaintService:ComplaintService,private _fb:FormBuilder) { }
  id:any;
 
  msg:string="";
  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      this.id=params['id'];
     
    })
    this.complaint = this._complaintService.getComplaintById(this.id).subscribe((response:any) => (this.complaint = response));
    console.log(this.id);
    console.log(this.complaint);
  }

  complaint:any;
 

  editComplaintForm:FormGroup = this._fb.group({

    complaintDescription:[''],
    approval:[''],
      
  })

  updateComplaint()
  {
    this._complaintService.updateComplaint(this.id,this.editComplaintForm.value).subscribe(response => {console.log(response)});
    setTimeout(() => {
      this._route.navigate(['/viewComplaints']);
    }, 1000);
 
  }

}
