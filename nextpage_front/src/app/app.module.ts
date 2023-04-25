import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ReviewComponent } from './review/review.component';

import { HomePageComponent } from './home-page/home-page.component';

import { AboutPageComponent } from './about-page/about-page.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignUpPageComponent,
    SignInPageComponent,
    ReviewComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
