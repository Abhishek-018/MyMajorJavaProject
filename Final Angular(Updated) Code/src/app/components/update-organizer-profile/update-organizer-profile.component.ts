import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/utility/register.service';

@Component({
  selector: 'app-update-organizer-profile',
  templateUrl: './update-organizer-profile.component.html',
  styleUrls: ['./update-organizer-profile.component.css']
})
export class UpdateOrganizerProfileComponent implements OnInit {
  organizer: any
  registerId: any;
  username: any;

  updateProfileOrganizerForm: FormGroup = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
    contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  })
  constructor(private _fb: FormBuilder,private _router: Router, private _registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerId = sessionStorage.getItem('registrationId');
    this.username = sessionStorage.getItem('firstName');
    console.log(this.registerId);

    this.organizer = this._registerService.getOrganizerById(this.registerId).subscribe((data: any) => {

      this.organizer = data;
    });


   

  } 

  updateOrganizerProfile() {
    
    this._registerService.updateUserprofile(this.registerId, this.updateProfileOrganizerForm.value).subscribe(response => { console.log(response) });
    setTimeout(() => {
      this._router.navigate(['/events']);
    }, 1000);
   

  }
  
  cancel() {
    this._router.navigate(['/events'])
  }

}
