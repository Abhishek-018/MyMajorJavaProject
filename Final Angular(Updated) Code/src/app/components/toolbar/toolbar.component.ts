import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  opened = false;
  constructor(private _route:Router) { }

  ngOnInit(): void {
    
  }

  Logout()
  {
    this._route.navigate(['/']);
  }
  

}
