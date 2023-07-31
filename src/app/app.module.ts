import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { CartComponent } from './pages/cart/cart.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    FavouritesComponent,
    CartComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
