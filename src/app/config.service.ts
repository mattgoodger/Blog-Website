import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;
  apiUrl = 'api/posts';

  constructor(private http: HttpClient) { }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getConfig() {
    return this.config;
  }

  getPosts(): Observable<Post[]> {
     return this.http.get<any>(this.apiUrl).pipe(
       tap(
         post => console.log(post)
       ),
       catchError(this.handleError('Get Posts', []))
     );
  }

  getSettings(database: string, id?: string): Observable<any[]> {

    const uid = id || null;
    let url: string;
    uid !== null ? url = `api/${database}/${id}` : url = `api/${database}`;
    return this.http.get<any>(url).pipe(
      tap(
        setting => console.log(setting)
      ),
      catchError(this.handleError('Get Settings', []))
    );
 }

  updatePost(formData: NgForm): Observable<Post> {
    return this.http.put<any>(`${this.apiUrl}`, formData, httpOptions).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Posts', []))
    );
 }
  addPost(formData: NgForm): Observable<Post> {
    return this.http.post<any>(`${this.apiUrl}`, formData).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Add New Post', []))
    );
  }

  getPostByID(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Get Post by ID', []))
    );
  }
}
