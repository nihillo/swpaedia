import { Component } from '@angular/core';
import { GetConfigService } from './get-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetConfigService]
})
export class AppComponent {
  title = 'app works!';
  apiUrl;

  constructor(private configServ: GetConfigService) {
  	this.apiUrl = this.configServ.API_URL;
  }
}
