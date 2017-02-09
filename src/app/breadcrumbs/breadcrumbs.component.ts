import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
	@Input() path;
	public breadcrumbs: any;
	private router: any;

	constructor(private _router: Router) {
		this.router = _router;
	}

	ngOnInit() {

		const route = this.router.url;

		if (typeof(this.path) == 'string') {
			this.path = this.path.split('/');
		}

		this.breadcrumbs = [
			{name: this.path[0], url: '/'},
			{name: this.path[1], url: '/' + route.split('/')[1]}
		];

		if (this.path.length > 2) {
			this.breadcrumbs.push({name: this.path[2], url: '/' + route});
		}
	}

}
