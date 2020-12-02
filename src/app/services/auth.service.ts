import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public sendMessage(body: any): Observable<any> {
    return this._http.post(environment.LOCALHOST_CODE, body);
  }

  public signUp(body: any): Observable<any> {
    return this._http.post(environment.LOCALHOST_SIGNUP, body);
  }

  public signIn(body: any): Observable<any> {
    return this._http.post(environment.LOCALHOST_SIGNIN, body);
  }

}
