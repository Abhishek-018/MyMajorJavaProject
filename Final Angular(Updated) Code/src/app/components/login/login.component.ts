import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // loginForm:FormGroup = this._fb.group({

  //   email:['',[Validators.required,Validators.email]],
  //   password:['',[Validators.required]]
  // })

  credentials=
  {
    email:"",
    password:""
  }

  onSubmit()
  {
    // console.log("form is submitted!!");
    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.password!=null))
    {
      console.log("We have to submit the form!!")
      //token generate:

    }
    else
    {
      // console.log("Fields are empty  !!");
      alert("Fields are empty!!")
    }
  }

}
