import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetailsComponent } from './pages/details/details.component';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';

import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 'AIzaSyB2d1rVEyNilQ7An7oXZM0gVVG9ITeKoXM'