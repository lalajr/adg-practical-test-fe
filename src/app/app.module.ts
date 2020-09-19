import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { JobListItemComponent } from './components/job-list-item/job-list-item.component';
import { JobDetailsComponent } from './page/job-details/job-details.component';

import { AppService } from './service/app.service';
import { JobService } from './service/job.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JobListItemComponent,
    JobDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    JobService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
