import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public slides: { img: string, title: string, description: string }[] = [
    {
      img: "",
      title: "Telegram",
      description: "The world's fastest messaging app. It is free and secure."
    },
    {
      img: "",
      title: "Fast",
      description: "Telegram delivers messages faster than any other application."
    },
    {
      img: "",
      title: "Free",
      description: "Telegram is free forever. No ads. No subscription fees."
    },
    {
      img: "",
      title: "Powerful",
      description: "Telegram has no limits on the size of your chats and media."
    },
    {
      img: "",
      title: "Secure",
      description: "Telegram keeps your messages safe from hacker attacks."
    },
    {
      img: "",
      title: "Cloud-Based",
      description: "Telegram lets you access your messages from multiple devices."
    }
  ]

  constructor(private _router: Router, private _utilsService: UtilsService) { }

  ngOnInit() {
  }

  public goSignUp() {
    this._utilsService.present("Please wait...");
    setTimeout(() => {
      this._utilsService.dismiss();
      this._router.navigate(["/number"]);
    }, 500);
  }

  public goSignIn() {
    this._utilsService.present("Please wait...");
    setTimeout(() => {
      this._utilsService.dismiss();
      this._router.navigate(["/signin"]);
    }, 500);
  }

}
