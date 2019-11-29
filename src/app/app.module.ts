import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { APP_BASE_HREF } from '@angular/common';
import { DataService } from "./services/data.service";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
