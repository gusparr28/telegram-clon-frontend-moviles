import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const io = require('socket.io-client');

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  public socket: any;
  public currentName: string;

  constructor(private _http: HttpClient) {
    this.socket = io('https://telegram-clon-moviles.herokuapp.com/');
  }

  public createChat(body: any) {
    return this._http.post('https://telegram-clon-moviles.herokuapp.com/chat', body);
  }

  public getChatById(id: string) {
    return this._http.get(`https://telegram-clon-moviles.herokuapp.com/chat/${id}`);
  }

  public getChatsByUser(id: any) {
    return this._http.get(`https://telegram-clon-moviles.herokuapp.com/get-chats/${id}`);
  }

  public deleteChat(id: any) {
    return this._http.delete(`https://telegram-clon-moviles.herokuapp.com/delete/${id}`);
  }
}
