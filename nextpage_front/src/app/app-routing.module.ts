import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component'

import { GamePageComponent } from './game-page/game-page.component';
import { MyGameComponent } from './my-game/my-game.component';
import { InfoGameComponent } from './info-book/info-game.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogGamesComponent } from './catalog-books/catalog-games.component';
import {AuthGuard} from "./guards/auth.guard";
import {ManageAccountComponent} from "./manage-account/manage-account.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes = [

  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard],},
  {path: 'about',component: AboutPageComponent},
  {path: 'signin',component: SignInPageComponent},
  {path: 'signup', component: SignUpPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'profile/:id', component: ProfilePageComponent},
  {path: 'book', component: GamePageComponent},
  {path: 'profile', component: ProfilePageComponent,canActivate: [AuthGuard],},
  {path: 'mybooks', component: MyGameComponent,canActivate: [AuthGuard],},
  {path: 'book/:id', component: GamePageComponent,canActivate: [AuthGuard],},
  {path: 'catalogs', component: CatalogListComponent,canActivate: [AuthGuard],},
  {path: 'catalogs/:id', component: CatalogGamesComponent,canActivate: [AuthGuard],},
  {path: 'manage-account', component: ManageAccountComponent,canActivate: [AuthGuard],},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
