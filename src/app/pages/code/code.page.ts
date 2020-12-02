import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  public code: String;
  public id: String;
  public data: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _utilsService: UtilsService) {
    this._route.queryParams.subscribe(() => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.data = this._router.getCurrentNavigation().extras.state.number;
      }
    })
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  public verifyCode() {
    if (this._router.url == `/code/signin/${this.id}`) {
      if (this.code === this.id) {
        this._utilsService.presentToast('Valid code', 'success');
        this._router.navigate(["home/settings"]);
      } else {
        this._utilsService.dismiss();
        this._utilsService.presentToast('Invalid code', 'danger');
      }
    } else {
      this._utilsService.present('Please wait...');
      setTimeout(() => {
        this._utilsService.dismiss();
        if (this.code === this.id) {
          this._utilsService.presentToast('Valid code', 'success');
          let navigationExtras: NavigationExtras = {
            state: {
              number: this.data
            }
          }
          this._router.navigate(["/signup"], navigationExtras);
        } else {
          this._utilsService.dismiss();
          this._utilsService.presentToast('Invalid code', 'danger');
        }
      }, 500);
    }
  }
}
