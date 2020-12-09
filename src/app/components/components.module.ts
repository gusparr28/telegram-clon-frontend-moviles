import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    ModalComponent,
    ChatComponent
  ],
  exports: [
    ModalComponent,
    ChatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
