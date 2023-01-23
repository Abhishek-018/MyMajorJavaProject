import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  username:any;
  constructor(private _router:Router) { }

  ngOnInit(): void {

    this.username = sessionStorage.getItem('firstName');
  }
Logout(){
  
  // sessionStorage.removeItem('registrationId');
  // sessionStorage.removeItem('email');
  // sessionStorage.removeItem('firstName');
  // sessionStorage.removeItem('lastName');
  // sessionStorage.removeItem('role');
  // sessionStorage.removeItem('contactNumber');
  sessionStorage.clear();
  setTimeout(() => this._router.navigate(["/"]),1000);
}
}
