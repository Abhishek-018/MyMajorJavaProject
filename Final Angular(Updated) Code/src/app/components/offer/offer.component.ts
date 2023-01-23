import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/utility/offer.service';
import { RegisterService } from 'src/app/utility/register.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  data: any;
  offer: any;

  organizerId: any;
  register: any;
  constructor(private _fb: FormBuilder,
    private _offerService: OfferService,
    private _router: Router,
    private _registerService: RegisterService) { }

  ngOnInit(): void {

    // this._offerService.getData().subscribe(data =>{console.log(data);
    // this.offer = data;})

    this.organizerId = sessionStorage.getItem('registrationId');
    console.log(this.organizerId);


    this.register = this._registerService.getUserById(this.organizerId).subscribe((data: any) => {
      console.log("userdata : ", data);
      this.register = data;
    });
    console.log(this.register);

  }
  addOfferForm: FormGroup = this._fb.group({
    event: [''],
    offerName: [''],
    offerDescription: [''],
    organizer: ['']

  })
  addOffer() {

    this._offerService.addOffer(this.addOfferForm.value).subscribe(data => console.log(data));
    console.log(this.addOfferForm.value);
    setTimeout(() => {
      this._router.navigate(['/viewOffers']);
    }, 1000);

  }

  cancel() {
    this._router.navigate(['/viewOffers']);
    

  }
}
