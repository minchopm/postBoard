import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/services';
import { MatDialog } from '@angular/material/dialog';
import { Note } from '@app/_models/note';
import { AddEditNoteDialogComponent } from '@app/home/add-edit-note-dialog.component';
import { NoteService } from '@app/services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  notes;

  constructor(private accountService: AccountService,
              private noteService: NoteService,
              public dialog: MatDialog) {
    this.user = this.accountService.userValue;
  }

  openDialog(article: Note): void {
    const dialogRef = this.dialog.open(AddEditNoteDialogComponent, {
      width: '280px',
      data: article
    } as any);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.date) {
          this.noteService.updateNotes(result).subscribe();
        } else {
          this.noteService.createNotes(result).subscribe();
        }
      }
    });
  }

  delete(event, article: Note) {
    event.preventDefault();
    event.stopPropagation();
    this.noteService.deleteNotes(article).subscribe(() => {
      this.notes = this.noteService.retrieveNotes();
    });
  }

  ngOnInit() {
    this.notes = this.noteService.retrieveNotes();
  }
}
