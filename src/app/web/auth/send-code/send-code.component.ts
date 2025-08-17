import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrl: './send-code.component.scss'
})
export class SendCodeComponent {
  constructor(
    private router: Router
  ) { }

  validateCode() {
    this.router.navigateByUrl(`payment`);
  }

}
