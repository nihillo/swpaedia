import { Injectable } from '@angular/core';
import {
    Router,
    Event,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class RoutesLoaderService {
	public loading: Subject<boolean> = new Subject<boolean>();

	constructor(private router: Router) {

		router.events.subscribe((event: Event) => {
			if (event instanceof NavigationStart) {
		        this.loading.next(true);
		    }
		    if (event instanceof NavigationEnd) {
		        this.loading.next(false);
		    }

		    // Set loading state to false in both of the below events to hide the spinner in case a request fails
		    if (event instanceof NavigationCancel) {
		        this.loading.next(false);
		    }
		    if (event instanceof NavigationError) {
		        this.loading.next(false);
		    }
		});

	}

	getLoading(): Observable<boolean> {
		return this.loading.asObservable();
	}
}
