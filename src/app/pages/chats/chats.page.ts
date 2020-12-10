import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Socket } from 'ngx-socket-io';

import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage {

  public chats = ['chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat', 'chat'];

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  public async openCreateChatModal() {
    const modal = await this._modalCtrl.create({
      component: ModalComponent
    });
    return await modal.present();
  }


}
