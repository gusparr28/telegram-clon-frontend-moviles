import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  public items1 = ['Saved Messages', 'Recent Calls', 'Devices', 'Chat Folders'];
  public items2 = ['Notifications and Sounds', 'Privacy and Security', 'Data and Storage', 'Appearance', 'Language', 'Stickers'];
  public items3 = ['Ask a Question', 'Telegram FAQ'];

  constructor() {}

}
