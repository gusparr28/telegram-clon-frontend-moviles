import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewChatPageRoutingModule } from './view-chat-routing.module';

import { ViewChatPage } from './view-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewChatPageRoutingModule
  ],
  declarations: [ViewChatPage]
})
export class ViewChatPageModule {}
