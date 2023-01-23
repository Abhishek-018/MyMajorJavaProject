import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/utility/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {


  id:any;
  event:any;
  msg:string="";
  
  editForm:FormGroup = this._fb.group({
    eventId:[''],
    eventName:[''],
    eventPrice:[''],
    eventLocation:[''],
    eventDate:[''],
    eventDetails:[''],
  })


  constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _eventService:EventService,private _fb:FormBuilder) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.event = this._eventService.getById(this.id).subscribe((res) => (this.event = res));
      console.log(this.event);
    })

  }

  update()
    {
      this._eventService.updateEvent(this.id,this.editForm.value).subscribe(res=>console.log(res));
      console.log("updated");
        this._router.navigate(['/events']) .then(() => {
          window.location.reload();
        });  
  }

  cancel(){
    this._router.navigate(['/events'])
  }

}
