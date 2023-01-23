import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/utility/register.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
  registerId: any;
  username:any;
  user:any;


  updateProfileUserForm: FormGroup = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
    contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  })
  constructor(private _fb: FormBuilder, private _router: Router,private _registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerId = sessionStorage.getItem('registrationId');
    this.username = sessionStorage.getItem('firstName');
    console.log(this.registerId);

    this.user = this._registerService.getUserById(this.registerId).subscribe((data: any) => {
      
    this.user = data;
    
    });
  }



  updateUserProfile() {
    
    this._registerService.updateUserprofile(this.registerId, this.updateProfileUserForm.value).subscribe(response => { console.log(response) });
    setTimeout(() => {
      this._router.navigate(['/viewUserEvent']);
    }, 1000);
   

  }


  

  cancel() {
    this._router.navigate(['/viewUserEvent'])
  }
}
