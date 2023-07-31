import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Product } from 'src/app/Interfaces/product';
import { DummyService } from 'src/app/dummy.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{

  favourites: Product[] = []
  private favouritesSubscription!: Subscription

  constructor(private favSer: DummyService){}

  ngOnInit() {
    this.favouritesSubscription = this.favSer.favouriteSubject.subscribe((fav)=>{
      this.favourites = fav
    })
  }
}
