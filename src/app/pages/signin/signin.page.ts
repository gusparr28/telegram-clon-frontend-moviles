import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public number: String;
  public numberSubscription: Subscription;

  constructor(private _authService: AuthService, private _router: Router, private _utilsService: UtilsService) { }

  ngOnInit() {
  }

  public sendNumber() {
    this._utilsService.present('Please wait...');
    this.numberSubscription = this._authService.signIn({ number: "+58" + this.number }).subscribe(res => {
      if (res.status == 200) {
        this._authService.sendMessage({ number: "+58" + this.number }).subscribe(res => {
          this._utilsService.dismiss();
          this._router.navigate(['/code/signin/', res.token]);
        })
      } else {
        // mostrar toast con el error proveniente del back
      }
    })
  }

}
