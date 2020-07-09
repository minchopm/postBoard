import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from '@app/_models/note';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './add-edit-note-dialog.component.html'
})
export class AddEditNoteDialogComponent implements OnInit {
  form: FormGroup;
  author;
  content;
  date;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddEditNoteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Note) {
    this.author = data.author || '';
    this.content = data.content || '';
    this.date = data.date || null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      author: [this.author, [Validators.required]],
      content: [this.content, [Validators.required]],
      date: [this.date],
    });
  }

}
