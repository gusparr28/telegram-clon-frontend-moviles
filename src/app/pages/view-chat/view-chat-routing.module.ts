import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChatPage } from './view-chat.page';

const routes: Routes = [
  {
    path: '',
    component: ViewChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewChatPageRoutingModule {}
