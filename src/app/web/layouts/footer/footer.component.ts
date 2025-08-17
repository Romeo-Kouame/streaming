import { Component } from '@angular/core';
import { AppConfig } from '../../../config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  appName = AppConfig.appName

}
