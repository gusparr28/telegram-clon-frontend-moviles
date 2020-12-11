import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketsService } from 'src/app/services/sockets.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})
export class ViewContactPage implements OnInit {
  public id: string;
  public number: string;
  public userName: string;

  constructor(private _router: Router, private _socketsService: SocketsService) {
  }

  ngOnInit() {
    this.userName = this._socketsService.currentName;
  }

  public closeViewContact() {
    this._router.navigate(['/home/chats']);
  }
}
