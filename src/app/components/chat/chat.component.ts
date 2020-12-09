import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() chat: any;

  constructor(private _router: Router) { }

  ngOnInit() {}

  public viewChat() {
    this._router.navigate(['/view-chat'])
  }

  public deleteChat() {
    
  }

}
