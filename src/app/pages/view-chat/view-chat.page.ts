import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.page.html',
  styleUrls: ['./view-chat.page.scss'],
})
export class ViewChatPage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public closeViewChat() {
    this._router.navigate(['/home/chats']);
  }

  public viewContact() {
    this._router.navigate(['/view-contact']);
  }

}
