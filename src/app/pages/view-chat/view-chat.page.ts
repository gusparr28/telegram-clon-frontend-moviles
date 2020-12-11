import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SocketsService } from 'src/app/services/sockets.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.page.html',
  styleUrls: ['./view-chat.page.scss'],
})
export class ViewChatPage implements OnInit {
  public sentMessage: any;
  public id: string;
  public userSubscription: Subscription;
  public name: string;
  public messages: any;

  constructor(private _socketsService: SocketsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {
    this._socketsService.socket.on('message', (message: any) => {
      console.log('MENSAJE', message);
      this.messages = message;
    });
    this._socketsService.socket.on('user-typing', ({ message }) => {
      console.log(message);
    });
    this.id = localStorage.getItem('number');
  }

  ngOnInit() {
    this._socketsService.socket.emit('join', {
      room: this._route.snapshot.paramMap.get('id')
    });
    this.userSubscription = this._userService.getUserInfo(this.id).subscribe(res => {
      this.name = res.user.name;
    });
    this._socketsService.getChatById(this._route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      console.log(res);
      this.messages = res.chat.messageInfo.map(v => {
        return {
          message: v.message,
          user: v.user
        };
      });
    });
  }

  public closeViewChat() {
    this._router.navigate(['/home/chats']);
  }

  public viewContact() {
    this._router.navigate(['/view-contact']);
  }

  public onChangeMessage() {
    this._socketsService.socket.emit('send-message', [
      ...this.messages.map(v => {
        return {
          user: v.user,
          message: v.message
        }
      }),
      {
        user: this.name,
        message: this.sentMessage
      }
    ]);
  }

  public valueChange(event: any) {
    this._socketsService.socket.emit('typing', this.name);
    this.sentMessage = event;
  }

}
