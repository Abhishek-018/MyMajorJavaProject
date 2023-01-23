import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this._dialog.open(RegisterFormComponent,{
    width:'30%'
    });
  }
  
  openFeedback(){
    const dialogRef = this._dialog.open(FeedbackFormComponent,{
      width:'30%'
      });
  }
}
