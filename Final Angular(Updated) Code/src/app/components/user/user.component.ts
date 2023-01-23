import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RaiseComplaintComponent } from '../raise-complaint/raise-complaint.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  opened = false;

  searchBy: string = "";
  constructor(private dialog:MatDialog,private _route:Router) { }

  ngOnInit(): void {
  }


  openComplaint() {
    const dialogRef = this.dialog.open(RaiseComplaintComponent,{
    width:'30%'
    });


    

    //  dialogRef.afterClosed().subscribe(result => {
    //    console.log(`Dialog result: ${result}`);
    // });
  }

  Logout()
  {
    this._route.navigate(['/']);
  }

}
