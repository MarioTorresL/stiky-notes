import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group.interface';
import { Notes } from 'src/app/interfaces/notes.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public group: Array<Group> = [];
  public notes: Array<Notes> = [];

  constructor() {}

  ngOnInit(): void {}

  addGroup(title: string = '', color: string = '') {
    const newGroup: Group = { title, color };
    this.group.push(newGroup);
  }

  addNotes(title: string, description: string, color: string) {
    const newNotes: Notes = { title, description, color, date: Date.now() };
    this.notes.push(newNotes);
  }
}
