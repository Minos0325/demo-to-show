import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

@Injectable()
export class AuthService {
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    
    redirectUrl: string;
    constructor(
        private http: HttpClient,
    ) {}
    login(user): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const url = '/toLogin';
        return this.http.post(url, user, { headers: headers });
    }
    // 登出
    toLogout(): Observable<any> {
        const getNavigationUrl = '/toLogout';
        return this.http.get(getNavigationUrl).pipe(
            tap(
                data => {},
                error => {
                    // this.httpErrorHandle.httpHandle(error, { 'action': '登出' });
                }
            )
        );
    }


    // 获取用户
    getUser(): Observable<any> {
        const url = '/getUser';
        return this.http.get(url);
    }
}
