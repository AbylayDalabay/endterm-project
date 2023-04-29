import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component'

import { BookPageComponent } from './book-page/book-page.component';
import { MyBookComponent } from './my-book/my-book.component';
import { InfoBookComponent } from './info-book/info-book.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogBooksComponent } from './catalog-books/catalog-books.component';


const routes: Routes = [

  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'signin', component: SignInPageComponent},
  {path: 'signup', component: SignUpPageComponent},

  {path: 'profile', component: ProfilePageComponent},
  {path: 'book', component: BookPageComponent},
  {path: 'profile/:id', component: ProfilePageComponent},
  {path: 'mybooks', component: MyBookComponent},
  {path: 'book/:id', component: BookPageComponent},
  {path: 'catalogs', component: CatalogListComponent},
  {path: 'catalogs/:string', component: CatalogBooksComponent},

  {path: '', redirectTo: 'about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
