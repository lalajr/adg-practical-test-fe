import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class JobService extends AppService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getJobs(params = []) {
    let newParams = this.prepareParams(params);
    return this.http.post(this.APP_URL + 'get-jobs', {}, {params : newParams})
  }
}
