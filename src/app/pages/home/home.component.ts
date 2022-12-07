import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/interfaces/group.interface';
import { Notes } from 'src/app/interfaces/notes.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public groupForm!: FormGroup;
  public notesForm!: FormGroup;
  public groups: Array<Group> = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.groupForm = this.fb.group({
      title: ['', Validators.required],
      notes: [''],
      color: ['#F5EF85'],
    });

    this.notesForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      group: [''],
      color: ['#F5EF85'],
    });
  }

  addGroup() {
    const newGroup = this.groupForm.value;
    const group = this.groups.filter((data) => data.title === newGroup.title);

    if (group.length !== 0) {
      Swal.fire({
        title: 'Warning',
        text: 'El grupo ya existe!',
        icon: 'warning',
        confirmButtonColor: '#F26835',
        confirmButtonText: 'Okay',
      });
    } else {
      this.groups.push(this.groupForm.value);
      this.groupForm.reset()
    }
  }

  addNotes() {
    const note = this.notesForm.value;

    const group = this.groups.filter((data) => data.title === note.group);

    if (group.length === 0) {
      Swal.fire({
        title: 'Warning',
        text: 'No se a seleccionado un grupo!',
        icon: 'warning',
        confirmButtonColor: '#F26835',
        confirmButtonText: 'Okay',
      });
      this.notesForm.reset()
    } else {
      (group[0].notes = [...group[0].notes, note]);
      this.notesForm.reset()
    }
  }
}
