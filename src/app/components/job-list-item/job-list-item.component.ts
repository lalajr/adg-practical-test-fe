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
  public desc:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Vel quam elementum pulvinar etiam. Ac ut consequat semper viverra. Volutpat diam ut venenatis tellus in metus vulputate. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Donec pretium vulputate sapien nec sagittis. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Arcu vitae elementum curabitur vitae. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi. Non quam lacus suspendisse faucibus. Justo donec enim diam vulputate ut pharetra sit. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.";
  
  constructor() { }

  ngOnInit(): void {
  }

  goDetails(id: number) {
    
  }

}
