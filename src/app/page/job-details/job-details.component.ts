import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractComponent } from 'src/app/abstract.component';
import { Job } from 'src/app/interface/job';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent extends AbstractComponent implements OnInit {

  public isBusy: boolean = true;
  public job: Job;
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {
    super();

    this.id = this.route.snapshot.params.id;
    this.getJob();
  }

  ngOnInit(): void { }

  getJob() {
    let params = [];
    params['id'] = this.id;

    this.jobService.getJob(params)
      .subscribe(
        (data: any) => {
          this.job = data.data;
          this.isBusy = false;
        }, 
        (error) => this.handleError(error))
  }
}
