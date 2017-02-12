import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { BreadcrumbsService } from '../breadcrumbs.service';
import { app_config } from '../../appconfig';
import { Router } from '@angular/router';
import {SearchPipe} from '../search.pipe';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers: [GetDataService, SearchPipe, BreadcrumbsService]
})
export class MasterComponent implements OnInit {
  private router: any;
  private path: string;
  private title: string;
  public loading: boolean;
  public totalElements: number;
  public elements: any;
  private blockRequests: boolean;
  private nextResource: any;
  private endResults: boolean;
  private endIcon: string;
  public filter: any;


  constructor(
    private data: GetDataService,
    private _router: Router,
    private applyFilter: SearchPipe,
    private breadcrumbsHandler: BreadcrumbsService
   ) {
    this.router = _router;
    this.loading = true;
    this.elements = [];
    this.endIcon = app_config.END_RESULTS_ICON;

  }

  ngOnInit() {
    this.filter = '';

    let url = this.router.url;
    this.path = url.split('/')[1];
    this.title = this.path;

    switch (this.path) {
      case 'characters':
        this.path = 'people';
        break;
    }

    this.path = '/' + this.path;

    this.blockRequests = false;
    this.nextResource = this.path;
    this.getNextTwoPages();
  }


  getData() {
    this.loading = true;

    this.data.getData(this.nextResource).subscribe(
      data => {
        this.loading = false;

        if (!this.totalElements) {
          this.totalElements = data.count;
        }

        data.results.forEach(item => {

          const itemPath = item.url.split('/');
          if (itemPath[1] === 'people') {
            itemPath[1] = 'characters';
          }
          item.url = itemPath.join('/');

          this.elements.push(item);
        });

        if (data.next) {
          this.nextResource = data.next;
        } else {
          this.nextResource = null;
          this.endResults = true;
        }

        if (!this.endResults && !this.blockRequests) {
          this.blockRequests = true;
          this.getData();
        }

        this.elements = this.applyFilter.transform(this.elements, '');

      }
    );
  }

  getNextTwoPages() {
    this.blockRequests = false;
    // for (let i = 0; i < 2; i++) {
      this.getData();
    // }
  }


  cleanSearch() {
    this.filter = '';
  }
}
