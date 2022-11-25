import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddNoteComponent } from './add-note/add-note.component';



@NgModule({
  declarations: [
    PagesComponent,
    AddGroupComponent,
    AddNoteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
