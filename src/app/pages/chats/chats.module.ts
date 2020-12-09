import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatsPage } from './chats.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ChatsPageRoutingModule } from './chats-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ChatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule {}
