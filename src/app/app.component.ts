import { Component, OnInit } from '@angular/core';
import { RoutesLoaderService} from './routes-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RoutesLoaderService]
})
export class AppComponent  implements OnInit {
  // public loadingHandler: any;
  public loading: boolean;

  constructor(private routesLoader: RoutesLoaderService) {
  	// this.loadingHandler = routesLoader;

  }

  ngOnInit() {

  	this.routesLoader.loading.subscribe(
  		isLoading => {
  			this.loading = isLoading;
  		}
  	);

  }
}
