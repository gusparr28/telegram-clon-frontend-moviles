import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})
export class ViewContactPage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public closeViewContact() {
    this._router.navigate(['/home/chats']);
  }
}
