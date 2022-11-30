import { Component, OnInit } from '@angular/core';
import {Group} from 'src/app/interfaces/group.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public group:Group[] = []

  constructor() {}

  ngOnInit(): void {
  }

  addGroup(name:string = '', color:string = '') {
    console.log({ name, color });
  }

  addNotes(name:string, content:string, color:string) {
    console.log({name, content, color});
  }
}
