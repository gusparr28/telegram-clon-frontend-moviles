import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'number',
    loadChildren: () => import('./pages/number/number.module').then( m => m.NumberPageModule)
  },
  {
    path: 'code/:id',
    loadChildren: () => import('./pages/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'code/signin/:id',
    loadChildren: () => import('./pages/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'view-chat',
    loadChildren: () => import('./pages/view-chat/view-chat.module').then( m => m.ViewChatPageModule)
  },
  {
    path: 'view-contact',
    loadChildren: () => import('./pages/view-contact/view-contact.module').then( m => m.ViewContactPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
