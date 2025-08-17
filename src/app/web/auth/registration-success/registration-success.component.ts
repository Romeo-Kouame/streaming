import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrl: './registration-success.component.scss'
})
export class RegistrationSuccessComponent {
  constructor(
    private router: Router
  ) { }

  sendCode() {
    this.router.navigateByUrl(`send-code`);
  }

}
