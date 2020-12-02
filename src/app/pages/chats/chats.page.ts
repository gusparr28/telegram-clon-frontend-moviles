import { Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage {

  public chats = ['chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat'];

  constructor() {}

}
