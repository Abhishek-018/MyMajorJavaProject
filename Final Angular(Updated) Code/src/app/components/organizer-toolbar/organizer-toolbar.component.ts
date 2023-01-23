import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizer-toolbar',
  templateUrl: './organizer-toolbar.component.html',
  styleUrls: ['./organizer-toolbar.component.css']
})
export class OrganizerToolbarComponent implements OnInit {
  opened = false;
  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  Logout()
  {
    this._route.navigate(['/']);
  }
}
