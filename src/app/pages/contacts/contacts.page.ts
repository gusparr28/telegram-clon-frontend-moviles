import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.page.html',
  styleUrls: ['contacts.page.scss']
})
export class ContactsPage {

  public contacts = ['contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact', 'contact']

  constructor() {}

}
