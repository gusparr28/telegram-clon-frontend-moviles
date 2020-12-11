import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { SocketsService } from 'src/app/services/sockets.service';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() chat: any;
  @Output() deletedChat = new EventEmitter<string>()
  public user: any;
  public currentUser: any;
  public name: string;
  public lastName: string;

  constructor(private _router: Router,
    private _userService: UserService,
    private _socketsService: SocketsService,
    private _alertCtrl: AlertController,
    private _utilsService: UtilsService) {
  }

  ngOnInit() {
    this.user = localStorage.getItem('number');
    if (this.user !== this.chat.userOne) {
      this.currentUser = this.chat.userOne;
    }
    if (this.user !== this.chat.userTwo) {
      this.currentUser = this.chat.userTwo;
    }
    this._userService.getUserInfo(this.currentUser).subscribe((res: any) => {
      this.name = res.user.name;
      this.lastName = res.user.lastName;
    });
  }

  public viewChat() {
    this._socketsService.currentName = this.name + " " + this.lastName;
    this._router.navigate([`/view-chat/${this.chat._id}`]);
  }

  public async deleteChat() {
    const alert = await this._alertCtrl.create({
      header: 'Are you sure, you want to delete it?',
      message: 'Be careful!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          handler: () => {
            this._utilsService.present('Please wait...');
            this._socketsService.deleteChat(this.chat._id).subscribe((res: any) => {
              setTimeout(() => {
                this._utilsService.dismiss();
                this.deletedChat.emit(this.chat);
                this._utilsService.presentToast(res.message, 'danger');
              }, 500);
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
