import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumberPageRoutingModule } from './number-routing.module';

import { NumberPage } from './number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumberPageRoutingModule
  ],
  declarations: [NumberPage]
})
export class NumberPageModule {}
