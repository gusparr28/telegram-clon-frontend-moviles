import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SocketsService } from 'src/app/services/sockets.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public number1: any;
  public number2: any;

  constructor(private _modalCtrl: ModalController,
    private _socketsService: SocketsService,
    private _router: Router,
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.number2 = localStorage.getItem('number');
  }

  public closeModal() {
    this._modalCtrl.dismiss();
  }

  public createChat() {
    if (!this.number1) {
      this._utilsService.present('Please wait...');
      setTimeout(() => {
        this._utilsService.dismiss();
        this._utilsService.presentToast('Enter a valid number', 'danger');
      }, 500);
    } else {
      this._socketsService.createChat({ userOne: "+58" + this.number1, userTwo: this.number2 }).subscribe((res: any) => {
        this._utilsService.present('Please wait...');
        setTimeout(() => {
          this._socketsService.socket.emit('create-chat', {
            users: [
              this.number1,
              this.number2
            ]
          });
          this._utilsService.dismiss();
          this._modalCtrl.dismiss();
          this._utilsService.presentToast('Chat successfully created', 'success');
          this._router.navigate(['/view-chat', res.newChat._id]);
        }, 500);
      });
    }
  }
}
