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
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1606937772/telegram-clon-moviles/image6_dywa5g.png",
      title: "Telegram",
      description: "The world's fastest messaging app. It is free and secure."
    },
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1606937772/telegram-clon-moviles/image2_ihjaq2.png",
      title: "Fast",
      description: "Telegram delivers messages faster than any other application."
    },
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1606937772/telegram-clon-moviles/image3_okd4lk.png",
      title: "Free",
      description: "Telegram is free forever. No ads. No subscription fees."
    },
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1606937772/telegram-clon-moviles/image4_fj05te.png",
      title: "Powerful",
      description: "Telegram has no limits on the size of your chats and media."
    },
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1606937772/telegram-clon-moviles/image5_sr8li0.png",
      title: "Secure",
      description: "Telegram keeps your messages safe from hacker attacks."
    },
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1606937767/telegram-clon-moviles/image1_zl0qql.png",
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
