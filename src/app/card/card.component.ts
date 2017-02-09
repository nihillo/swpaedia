import { Component, OnInit, Input } from '@angular/core';
import { app_config } from '../../appconfig';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() title: string;
	@Input() link: string;
	@Input() image: string;
	private FALLBACK_IMG = app_config.FALLBACK_IMG;

	constructor() {
	}

	ngOnInit() {

		if (this.image === '/images/no-image.png') {
			this.image = this.FALLBACK_IMG;
		}
	}
}
