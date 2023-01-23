import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizernavbar',
  templateUrl: './organizernavbar.component.html',
  styleUrls: ['./organizernavbar.component.css']
})
export class OrganizernavbarComponent implements OnInit {

  username:any;
  constructor(private _router:Router) { }

  ngOnInit(): void {

    this.username = sessionStorage.getItem('firstName');
  }
  Logout(){
  
    sessionStorage.removeItem('registrationId');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('contactNumber');
    sessionStorage.clear();
    setTimeout(() => this._router.navigate(["/"]),1000);
  }
}
