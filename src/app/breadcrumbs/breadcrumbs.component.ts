import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbsService } from '../breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  providers: [BreadcrumbsService]
})
export class BreadcrumbsComponent implements OnInit {
	public breadcrumbs: any;

	constructor(
		private breadcrumbsHandler: BreadcrumbsService
	) {
	}

	ngOnInit() {
		this.breadcrumbsHandler.getBreadcrumbs().subscribe(
			breadcrumbs => {
				console.log('holiiii');
				this.breadcrumbs = breadcrumbs;
			}
		);
	}

	createBreadcrumbs() {
		this.breadcrumbsHandler.setBreadcrumbs();
	}
}
