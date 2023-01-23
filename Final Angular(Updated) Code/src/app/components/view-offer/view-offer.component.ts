import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/utility/offer.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {

  offer: any;
  data: any;

  organizerId: any;
  displayedColumns: string[] = ['offerName', 'offerDescription', 'action'];
  constructor(private _offerService: OfferService, private _router: Router) { }

  ngOnInit(): void {

    this.organizerId = sessionStorage.getItem('registrationId');
    console.log("registerId: ", this.organizerId);

    this._offerService.getOfferByOrganizerId(this.organizerId).subscribe(data => {
      console.log(data);
      this.offer = data
    });


  }

  getOfferById(offerId: number) {
    this._offerService.getOfferById(offerId).subscribe(data => { console.log(data) });
    this._router.navigate(['/editOffer/' + offerId]);
  }

  deleteOffer(offerId: number) {
    if (confirm('Are you sure to delete record?')) {
      this._offerService.deleteOffer(offerId).subscribe(data => { console.log(data) });
      alert("Record Deleted Successfully")
      location.reload();
    }




    else {
      location.reload();
    }

  }

}
