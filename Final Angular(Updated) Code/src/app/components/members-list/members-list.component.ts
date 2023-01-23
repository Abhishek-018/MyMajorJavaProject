import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/utility/member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  //members: any;
  oragnizers: any
  data: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'role', 'action'];
  constructor(private _memberService: MemberService, private _router: Router) { }

  ngOnInit(): void {

    // this._memberService.getData().subscribe(data => { console.log(data); this.members = data })
    this._memberService.getOrganizer().subscribe(data => { console.log(data); this.oragnizers = data });

    // this._memberService.getUser().subscribe(data =>{console.log(data); this.members = data});

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
