import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/utility/complaint.service';

@Component({
  selector: 'app-viewusercomplaint',
  templateUrl: './viewusercomplaint.component.html',
  styleUrls: ['./viewusercomplaint.component.css']
})
export class ViewusercomplaintComponent implements OnInit {
 
  complaints:any;
  data:any;
  constructor(private _complaintService:ComplaintService) { }

  ngOnInit(): void {
    this._complaintService.getData().subscribe(data =>{console.log(data); this.complaints = data})
  }

}
