import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/utility/register.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  message:any;
  hide = true;
  registerForm:FormGroup=this._fb.group({
    
    firstName:['',[Validators.required,Validators.minLength(5)]],
    lastName:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8), Validators.maxLength(24)]],
    role:['',[Validators.required]],
    contactNumber:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
   
  })
  constructor(private _dialog:MatDialog,private _fb:FormBuilder, private _router:Router,private _registerService:RegisterService,private dialogueRef :MatDialogRef<RegisterFormComponent>) { }

  ngOnInit(): void {
  }

  openLogin() {
    const dialogRef = this._dialog.open(LoginFormComponent,{
    width:'30%'
    });
  
  }
  Register(){
    console.log(this.registerForm.value);
    //this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(result=>{console.log(result);this.msg=result});
    this._registerService.Register(this.registerForm.value).subscribe({
      next:(res)=>{
        alert("Registration successfully");
        this.registerForm.reset();
        // this.dialogueRef.close('save');
        // this._router.navigate(['/loginform'])
        this._dialog.open(LoginFormComponent,{
          width:'30%'
          });
       
      },

      error:()=>{
        alert("Error while Registering")
      }

    });
}
}
