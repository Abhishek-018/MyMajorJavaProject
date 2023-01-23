import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/utility/register.service';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {
  id:any;
  user:any;
  registerId: any;
  username:any;
  constructor(private _router:Router,private _registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerId = sessionStorage.getItem('registrationId');
    console.log(this.registerId);

    this.user = this._registerService.getUserById(this.registerId).subscribe((data: any) => {
      
    this.user = data;

    
    console.log(this.user);
    
    });
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
