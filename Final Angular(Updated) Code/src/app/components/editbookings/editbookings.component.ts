import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsereventrbookingService } from 'src/app/utility/usereventrbooking.service';

@Component({
  selector: 'app-editbookings',
  templateUrl: './editbookings.component.html',
  styleUrls: ['./editbookings.component.css']
})
export class EditbookingsComponent implements OnInit {
  id: any;

  msg: string = "";
  booking: any;
  event: any;
  constructor(private _route: Router, private _activatedRoute: ActivatedRoute, private _bookingService: UsereventrbookingService, private _fb: FormBuilder) { }


  editBookingForm: FormGroup = this._fb.group({

    eventName: [''],
    eventPrice: [''],
    status: ['']

  })

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];

    })
    this.booking = this._bookingService.getById(this.id).subscribe((response: any) => (this.booking = response));
    console.log(this.id);
    console.log(this.booking);
  }

  updateUserBooking() {
    this._bookingService.updateBooking(this.id, this.editBookingForm.value).subscribe(response => { console.log(response) });
    setTimeout(() => {
      this._route.navigate(['/viewOrganizerBookings']);
    }, 1000);

  }

  cancel() {
    this._route.navigate(['/viewOrganizerBookings']);
  }

}
