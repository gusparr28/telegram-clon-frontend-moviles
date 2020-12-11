import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  public socket: any;

  constructor(private _http: HttpClient) {
    this.socket = io('http://localhost:3000');
  }

  public createChat(body: any) {
    return this._http.post('http://localhost:3000/chat', body);
  }

  public getChatById(id: string) {
    return this._http.get(`http://localhost:3000/chat/${id}`);
  }

  public getChatsByUser(id: any) {
    return this._http.get(`http://localhost:3000/get-chats/${id}`);
  }
}
