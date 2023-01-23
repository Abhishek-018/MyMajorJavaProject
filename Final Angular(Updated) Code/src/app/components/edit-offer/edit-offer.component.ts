import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/utility/offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _offerService: OfferService, private _router: Router, private _activatedRoute: ActivatedRoute) { }
  id: any;
  offer: any;

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.offer = this._offerService.getOfferById(this.id).subscribe((res) => (this.offer = res));
      console.log(this.offer);
    })

  }

  editOfferForm: FormGroup = this._fb.group({

    offerName: [''],
    offerDescription: ['']
  })

  editOffer() {

    this._offerService.editOffer(this.id, this.editOfferForm.value).subscribe(res => console.log(res));
    console.log("updated");
    this._router.navigate(['/viewOffers']).then(() => {
      window.location.reload();
    });

  }

  cancel() {
    this._router.navigate(['/viewOffers'])
   
  }
}
