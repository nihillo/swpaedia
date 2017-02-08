import { Injectable } from '@angular/core';
import { app_config } from '../appconfig';

@Injectable()
export class GetConfigService {
	public API_URL = app_config.API_URL;
  	constructor() { }

}
