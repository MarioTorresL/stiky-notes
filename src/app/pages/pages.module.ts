import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
