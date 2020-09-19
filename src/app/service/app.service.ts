import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public APP_URL = environment.apiUrl;

  constructor() { }

  public prepareParams(params) {
    params['token'] = environment.token;

    return params;
  }
}
