import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GithubUser } from '../models/githubUser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = environment.apiGithub;

  constructor(private http: HttpClient) { }

  getUserInformation(): Observable<GithubUser>{
    return this.http.get<GithubUser>(`${this.url}/users/wferreiracosta`).pipe(
      map((obj) => obj)
    );
  }

}
