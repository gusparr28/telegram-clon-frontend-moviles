import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {}

  public closeModal() {
    this._modalCtrl.dismiss();
  }

  

}
