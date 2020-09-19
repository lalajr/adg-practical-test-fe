import { Component, Input, OnInit } from '@angular/core';

import { Job } from '../../interface/job';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']
})
export class JobListItemComponent implements OnInit {

  @Input('job') job: Job;

  public descLimit: number = 100;
  
  constructor() { }

  ngOnInit(): void { }
}
