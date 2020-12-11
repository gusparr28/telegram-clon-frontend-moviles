import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalComponent } from 'src/app/components/modal/modal.component';
import { SocketsService } from 'src/app/services/sockets.service';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage {
  public id: string;
  public chats: any = [];
  public otherUser: any = [];

  constructor(private _modalCtrl: ModalController, private _socketsService: SocketsService) {
    this._socketsService.socket.on('chat', () => {
      console.log('created chat');
    });
  }

  ngOnInit() {
    this.id = localStorage.getItem('number');
    this._socketsService.getChatsByUser(this.id).subscribe((res: any) => {
      this.chats = res.chat;
      this.otherUser = this.chats.map((v, index) => {
        let userOne = this.chats.find(v => v.userOne !== this.id)?.userOne;
        if (userOne) {
          return userOne;
        }
        let userTwo = this.chats.find(v => v.userTwo !== this.id)?.userTwo;
        if (userTwo) {
          return userTwo;
        }
      });
    });
  }

  public async openCreateChatModal() {
    const modal = await this._modalCtrl.create({
      component: ModalComponent
    });
    return await modal.present();
  }

}
