import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  public items4 = ['Sign Out'];
  public userInfo: any = {
    name: '',
    lastName: '',
    number: ''
  };
  public id: string;
  public profileSubscription: Subscription;

  constructor(private _userService: UserService, private _utilsService: UtilsService, private _router: Router) {
    this.id = localStorage.getItem('number');
  }

  ngOnInit() {
    this.profileSubscription = this._userService.getUserInfo(this.id).subscribe(res => {
      this.userInfo['name'] = res.user.name;
      this.userInfo['lastName'] = res.user.lastName;
      this.userInfo['number'] = res.user.number;
    })
  }

  ionViewDidLeave() {
    this.profileSubscription.unsubscribe();
  }

  public signOut() {
    this._utilsService.present('Please wait...');
    setTimeout(() => {
      this._utilsService.dismiss();
      localStorage.removeItem('number');
      window.location.href = '/';
    }, 500);
  }
}
