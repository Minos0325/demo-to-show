import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersApi {

  constructor(
    private http: HttpClient,
  ) {
  }

  getToken(userName: string, password: string): Observable<any> {
    return this.http.post('/token', {
      username: userName,
      password: password
    });
  }

}
