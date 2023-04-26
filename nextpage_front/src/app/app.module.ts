import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ReviewComponent } from './review/review.component';

import { HomePageComponent } from './home-page/home-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
// origin/home-page

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignUpPageComponent,
    SignInPageComponent,
    ReviewComponent,
    ReviewPageComponent,
    ManageAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
