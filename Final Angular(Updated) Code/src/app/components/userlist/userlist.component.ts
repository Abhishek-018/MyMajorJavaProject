import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/utility/member.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any;
  data: any;
  

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'role', 'action'];
  constructor(private _memberService: MemberService, private _router: Router) { }

  ngOnInit(): void {

    this._memberService.getUser().subscribe(data => { console.log(data); this.users = data });
  }

  delete(registrationId: number) {
    if (confirm('Are you sure you want to delete record?')) {
      this._memberService.delete(registrationId).subscribe(data => { console.log(data) });
      alert("Record Deleted Successfully")
      location.reload();

    }
    else {
      location.reload();
    }



  }

}
