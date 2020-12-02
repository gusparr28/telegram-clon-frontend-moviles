import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public getUserInfo(number: any): Observable<any> {
    return this._http.get<any>(environment.LOCALHOST_PROFILE + number);
  };

}
