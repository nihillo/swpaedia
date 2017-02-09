import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers: [GetDataService]
})
export class MasterComponent implements OnInit {
  private router: any;
  private path: string;
  public count: number;
  public elements: any;


  constructor(private data: GetDataService, private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    let url = this.router.url;
    this.path = url.split('/')[1];

    switch (this.path) {
      case 'characters':
        this.path = 'people';
        break;
    }

    this.path = '/' + this.path;


  	this.data.getData(this.path).subscribe(
  		data => {
        this.count = data.count;
  			this.elements = data.results;
  		}
  	);

  }
}
