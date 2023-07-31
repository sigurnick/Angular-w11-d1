import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Interfaces/product';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  url:string = 'https://dummyjson.com/products'
  favourite: Product[] = []
  favouriteSubject: Subject<Product[]> = new Subject<Product[]>()


  constructor(private http:HttpClient) { }

  getAllProduct() {
    return this.http.get(this.url)
  }

  addFavourite(item:Product) {
    this.favourite.push(item)
    this.updateFavourite()
  }

  updateFavourite() {
    this.favouriteSubject.next(this.favourite)
  }




}
