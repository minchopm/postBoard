import { Injectable } from '@angular/core';
import { Note } from '@app/_models/note';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  sortByDate(data) {
    return data.sort((a, b) => b.date - a.date);
  }

  retrieveNotes() {
    return this.http.get(`${environment.apiUrl}/notes`).pipe(tap(this.sortByDate));
  }
  createNotes(article: Note) {
    return this.http.post(`${environment.apiUrl}/notes`, article);
  }

  updateNotes(article: Note) {
    return this.http.put(`${environment.apiUrl}/notes/${article.date}`, article);
  }

  deleteNotes(article: Note) {
    return this.http.delete(`${environment.apiUrl}/notes/${article.date}`);
  }
}
