import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [GetDataService]
})
export class FilmsComponent implements OnInit {
  public movies: any;
  constructor(private data: GetDataService) { }

  ngOnInit() {
  	this.data.getData('/films').subscribe(
  		data => {
  			this.movies = data.results;
  		}
  	);
  }

}
