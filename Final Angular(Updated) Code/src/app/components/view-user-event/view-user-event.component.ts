import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from 'src/app/utility/event.service';
import { BookdialogComponent } from '../bookdialog/bookdialog.component';

@Component({
  selector: 'app-view-user-event',
  templateUrl: './view-user-event.component.html',
  styleUrls: ['./view-user-event.component.css']
})
export class ViewUserEventComponent implements OnInit {
id:any;
  events:any;
  searchBy:string = "";
  x:any;
  constructor(private _eventService:EventService,private bdialog:MatDialog) { }

  ngOnInit(): void {

       //this._eventService.getDataByPrice().subscribe(data => {console.log(data), this.events = data});
       //this._eventService.getData().subscribe(data => {console.log(data), this.events = data});
       this.events=this._eventService.getData().subscribe(data => { console.log(data), this.events = data });
    
      //  this.x=this.events.offer.offerName;
       console.log("x :",this.x);
       

      }
  

  openDialog() {
    const dialogRef = this.bdialog.open(BookdialogComponent,{
    width:'30%',
    //height: '100%'
    });

    //  dialogRef.afterClosed().subscribe(result => {
    //    console.log(`Dialog result: ${result}`);
    // });
  }

}
