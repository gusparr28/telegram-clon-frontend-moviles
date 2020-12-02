import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public name: String;
  public lastName: String;
  public number: any;
  public userSubscription: Subscription;

  constructor(private _authService: AuthService,
    private _router: Router,
    private _utilsService: UtilsService,
    private _route: ActivatedRoute) {
    this._route.queryParams.subscribe(() => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.number = this._router.getCurrentNavigation().extras.state.number;
      }
    })
  }

  ngOnInit() {
  }

  public postData() {
    this._utilsService.present('Please wait...');
    this.userSubscription = this._authService.signUp({ name: this.name, lastName: this.lastName, number: this.number }).subscribe(res => {
      this._utilsService.dismiss();
      this._utilsService.presentToast('User successfully signed up', 'success');
      setTimeout(() => {
        localStorage.setItem('number', res.number);
        this._router.navigate(['/home/settings']);
      }, 500);
    }, err => {
      this._utilsService.dismiss();
      this._utilsService.presentToast(err.error.error, 'danger');
    })
  }

  ionViewDidLeave() {
    this.userSubscription.unsubscribe();
  }

}
