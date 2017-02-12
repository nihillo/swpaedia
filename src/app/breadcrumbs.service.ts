import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class BreadcrumbsService {
  	public breadcrumbs: Subject<any> = new Subject<any>();
  	public breadcrumbsArray: Array<any> = [];

	constructor(router: Router) {
		this.breadcrumbsArray = [];
		this.breadcrumbsArray.push(
			{name: 'home', url: '/'}
		);

		let path = router.url.split('/');

		if (path.length > 0) {
			this.breadcrumbsArray.push(
				{name: path[1], url: '/' + path[1]}
			);
		}
		// setTimeout(
		// 	() => {
				// this.breadcrumbs.next(this.breadcrumbsArray);
		// 	}, 3000
		// );
	}

	setBreadcrumbs() {
		this.breadcrumbs.next(this.breadcrumbsArray);
	}

	getBreadcrumbs(): Observable<any> {
		return this.breadcrumbs.asObservable();
	}

	getBreadcrumbsArray() {
		return this.breadcrumbsArray;
	}
}
