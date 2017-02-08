import { Injectable } from '@angular/core';
import { app_config } from '../appconfig';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class GetDataService {
  private API_URL = app_config.API_URL;

  constructor(private ajax: Http) {}

  public getData(resource: String): Observable<any> {

  	if (resource[0] !== '/') {
  		resource = '/' + resource;
  	}

  	const url = this.API_URL + resource;

  	return this.ajax.
  		get(url).map( response => response.json());
  }
}
