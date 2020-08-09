import { NotificationComponent } from './components/notification/notification.component';
import { ShoutOutTemplateComponent } from './components/shoutOut-template/shout-out-template/shout-out-template.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent} from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnalyticsComponent } from './components/analytics/analytics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoutOutTemplateComponent,
    NotificationComponent,
    AnalyticsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
