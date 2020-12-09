import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.page.html',
  styleUrls: ['contacts.page.scss']
})
export class ContactsPage {

  public contacts = ['contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact']

  constructor(private _router: Router) {}

  public viewChat() {
    this._router.navigate(['/view-chat']);
  }

}
