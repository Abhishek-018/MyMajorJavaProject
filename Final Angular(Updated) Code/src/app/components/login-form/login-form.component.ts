import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormRecord, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Registrationdemo } from 'src/app/utility/IRegistrationdemo';
import { LoginService } from 'src/app/utility/login.service';
import { RegisterService } from 'src/app/utility/register.service';
import { RegisterFormComponent } from '../register-form/register-form.component';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  message: any;
  hide = true;
  id: any;
  role: any = ["user", "organizer"];
  userObject: any;

  login: any;
  msg: any;
  // username:any;
  //public showPassword: boolean = false;

  loginForm: FormGroup = this._fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })
  constructor(private _route: Router, private _fb: FormBuilder, private _dialog: MatDialog, private _registerService: RegisterService, private _loginService: LoginService) { }

  ngOnInit(): void {

    // this.username = sessionStorage.getItem('firstName');
  }
  openDialog() {
    const dialogRef = this._dialog.open(RegisterFormComponent, {
      width: '30%'
    });

  }

  // public togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }

  Login() {
    //console.log(this.loginForm.value);
    //this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(result=>{console.log(result);this.msg=result});
    /*  this._registerService.Register(this.registerForm.value).subscribe({
       next:(res)=>{
         alert("Registration successfully");
         this.registerForm.reset();
         this.dialogueRef.close('save');
       },
   
       error:()=>{
         alert("Error while Registering")
       }
   
     }); */

    // this._registerService.getRegisteredUsersByEmail(this.loginForm.controls['email'].value).subscribe(
    //   response => {
    //    sessionStorage.setItem('email',response.email);
    //    sessionStorage.setItem('password',response.password);

    //    sessionStorage.setItem('authorize',response.authorize);
    //    sessionStorage.setItem('role',response.userRole);
    //    sessionStorage.setItem('regId',response.userId);
    //    console.log(response);
    //   },

    //   (error => console.log(error)));
    //     console.log("registrationId:",sessionStorage.getItem("registrationId"));
    //     setTimeout(()=>
    //     this.record(),2000
    //     )
    //   }
    //  record(){


    // *********************************************************************************************************************************

    //  this._registerService.getRegisteredUsersByEmail(this.loginForm.controls['email'].value).subscribe(
    //    response =>{
    //      sessionStorage.setItem('email',response.email);
    //      sessionStorage.setItem('password',response.password);

    //      sessionStorage.setItem('authorize',response.authorize);
    //      sessionStorage.setItem('role',response.role);

    //      sessionStorage.setItem('registrationId',response.registrationId);
    //      console.log(response);
    //    },

    //    (error => console.log(error)));
    //    console.log("registrationId:", sessionStorage.getItem("registrationId"));
    //    setTimeout(() =>
    //    this.record(),2000)

    //   }

    //  record()
    //  {

    //   if(this.loginForm.controls['password'].value==sessionStorage.getItem('password')){
    //     if(sessionStorage.getItem("role")=="User")
    //     {
    //       this._route.navigate(['/usertoolbar']);
    //     }
    //     else if(sessionStorage.getItem("role")=="Event organizer")
    //     {
    //       // this._route.navigate(['/organizerdashboard']);
    //       // this._route.navigate(['/addEvent']);
    //       this._route.navigate(['/']);
    //     }
    //     else if(sessionStorage.getItem("role")=="admin")
    //     {
    //       this._route.navigate(['/admintoolbar']);
    //     }
    //   }
    //   else{
    //     alert("Wrong Credentials")
    //     this._route.navigate(['/homepage']);
    //   }









    // *****************************************************************************************************************************************************
      this.login = this._loginService.loginMethod(<Registrationdemo>this.loginForm.value).subscribe((resp: any) => {
      this.login = resp;
      console.log("login response", resp);

      console.log(this.loginForm.value);

      // setting session storage
      sessionStorage.setItem('registrationId', this.login.registrationId);
      sessionStorage.setItem('email', this.login.email);
      sessionStorage.setItem('firstName', this.login.firstName);
      sessionStorage.setItem('lastName', this.login.lastName);
      sessionStorage.setItem('role', this.login.role);
      sessionStorage.setItem('contactNumber', this.login.contactNumber);

      // navigating user to it's paticular page
      if (this.login.role == "admin") {
        this._route.navigate(["/adminnavbar"]);
      }
      else if (this.login.role == "organizer") {
        this._route.navigate(["/organizernavbar"]);
      }
      else if (this.login.role == "User") {
        this._route.navigate(["/usernavbar"]);
      }
      else if (!this.loginForm.valid) {
        this._route.navigate(["/homepage"]);;
      }
    },

      (error) => {
        //this.msg = error;
        alert("Wrong Credentials");
        //console.log(this.msg.error);
      }

    );


  }
}
