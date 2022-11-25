import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public note: boolean = false;
  public groupp: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.note = false;
    this.groupp = false;
  }

  addGroup() {
    this.note = false
    this.groupp = true;
    console.log('agregar grupo');
  }

  addNotes() {
    this.note = true;
    this.groupp = false;
    console.log('agregar nota');
  }
}
