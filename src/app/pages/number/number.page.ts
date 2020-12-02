import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.page.html',
  styleUrls: ['./number.page.scss'],
})
export class NumberPage implements OnInit {

  public number: String;
  public numberSubscription: Subscription;

  constructor(private _authService: AuthService, private _router: Router, private _utilsService: UtilsService) { }

  ngOnInit() {
  }

  public sendNumber() {
    this._utilsService.present('Please wait...');
    this.numberSubscription = this._authService.sendMessage({ number: "+58" + this.number }).subscribe(res => {
      this._utilsService.dismiss();
      this._utilsService.presentToast('Message sent', 'success');
      setTimeout(() => {
        if (res.status === 200) {
          let navigationExtras: NavigationExtras = {
            state: {
              number: "+58" + this.number
            }
          }
          this._router.navigate(['/code', res.token], navigationExtras);
        }
      }, 500);
    }, () => {
      setTimeout(() => {
        this._utilsService.dismiss();
        this._utilsService.presentToast('Invalid number', 'danger');
      }, 500);
    })
  }

  ionViewDidLeave() {
    this.numberSubscription.unsubscribe();
  }

}
