import { Component, OnInit } from '@angular/core';

import { JobService } from 'src/app/service/job.service';
import { JobItems } from '../../interface/job-items';

import { AbstractComponent } from '../../abstract.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AbstractComponent implements OnInit {

  public isBusy: boolean = true;
  public rePaging: boolean = false;
  public jobs: JobItems;
  public perPage = 15;
  public currPage = 0;
  public lastPage = 0;

  constructor(
    private jobService: JobService
  ) {
    super();
    this.startGetJobs();
  }

  ngOnInit(): void {
  }

  startGetJobs() {
    let params = [];
    params['per_page'] = this.perPage;
    params['page'] = this.currPage;

    this.jobService.getJobs(params)
      .subscribe(
        (data: any) => {
          if (this.jobs && this.jobs.length > 0) {
            this.jobs.push(...data.data);
          } else {
            this.jobs = data.data;
          }
          
          if (data.meta) {
            this.currPage = data.meta.current_page;
            this.lastPage = data.meta.last_page;
            this.rePaging = false;
          }

          this.isBusy = false;
        }, 
        (error) => this.handleError(error))
  }

  loadMore() {
    this.currPage += 1;
    this.rePaging = true;
    return this.startGetJobs();
  }
}
