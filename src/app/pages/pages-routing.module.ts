import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddGroupComponent} from './add-group/add-group.component';
import {AddNoteComponent} from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'add-note', component: AddNoteComponent },
      { path: 'add-group', component: AddGroupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
