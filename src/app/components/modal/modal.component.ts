import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SocketsService } from 'src/app/services/sockets.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public number1: any;
  public number2: any;

  constructor(private _modalCtrl: ModalController, private _socketsService: SocketsService, private _router: Router) { }

  ngOnInit() {
    this.number2 = localStorage.getItem('number');
  }

  public closeModal() {
    this._modalCtrl.dismiss();
  }

  public createChat() {
    this._socketsService.createChat({ userOne: this.number1, userTwo: this.number2 }).subscribe((res: any) => {
      this._modalCtrl.dismiss();
      this._router.navigate(['/view-chat', res.newChat._id]);
    });
  }
}
