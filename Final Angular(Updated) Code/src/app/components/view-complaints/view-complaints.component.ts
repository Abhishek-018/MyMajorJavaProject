import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/utility/complaint.service';
import { Complaint } from 'src/app/utility/IComplaint';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent implements OnInit {

  complaints:any;
  data:any;
  constructor(private _complaintService:ComplaintService, private _router:Router) { }

  ngOnInit(): void {
    
      this._complaintService.getData().subscribe(data =>{console.log(data); this.complaints = data})

  }

  // delete(complaintId:number,complaint1:Complaint)
  // {
  //   this._complaintService.updateComplaint(complaintId,complaint1).subscribe(data => {console.log(data)});
  //   location.reload();
  // }

}
