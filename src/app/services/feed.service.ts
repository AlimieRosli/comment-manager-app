import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/posts`);
  }

  getPostInfo(id): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/posts/${id}`);
  }

  getComments(id): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/comments?postId=${id}`);
  }

}
