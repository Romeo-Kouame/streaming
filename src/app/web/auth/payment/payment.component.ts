import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  activeTab = 1;

  constructor(
    private router: Router
  ) {

  }
  get pillPositionClass() {
    return `pill-pos-${this.activeTab}`; // returns pill-pos-1 or pill-pos-2
  }

  paye() {
    this.router.navigateByUrl(`paye`)

  }

}
