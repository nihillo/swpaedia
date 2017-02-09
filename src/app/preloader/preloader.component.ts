import { Component, OnInit } from '@angular/core';
import { app_config } from '../../appconfig';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
	private spinner: string;

	constructor() { }

	ngOnInit() {
		this.spinner = app_config.SPINNER;
	}

}
