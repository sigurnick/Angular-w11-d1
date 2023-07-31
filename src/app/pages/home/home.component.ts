import { Product } from './../../Interfaces/product';
import { Component } from '@angular/core';
import { DummyService } from 'src/app/dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dati!:any
  allProducts:Product[] = []




  constructor(private dummy:DummyService){}

  ngOnInit() {

     this.dummy.getAllProduct().subscribe((data)=>{
      this.dati = data
     this.allProducts = this.dati.products
      console.log(this.allProducts);
     })

  }

  addToFavourites(item:Product) {
    this.dummy.addFavourite(item)
  }

}
