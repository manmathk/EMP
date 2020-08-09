import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoutOutTemplateComponent } from './components/shoutOut-template/shout-out-template/shout-out-template.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'template',
    component:ShoutOutTemplateComponent
  },
  {
    path:'notification',
    component:NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
