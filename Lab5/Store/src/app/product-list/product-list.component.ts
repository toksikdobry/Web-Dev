import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnChanges{
  @Input() item = '';
  products = products;
  newProducts = products;

  ngOnInit(){

  }

  ngOnChanges(item: SimpleChanges) {
    if(this.item == '' || this.item == 'None' || this.item == 'Все'){
      this.newProducts = products
      return
    }
    const np = this.products.filter((prod) => {
      return prod.category == this.item
    })
    this.newProducts = np
  }

  share(name: string, url: string) {
    window.location.href = `https://t.me/share/url?url=Купи ${name} по очень выгодной цене!&text=${url}`
  }

  del(id: number){
    const nP = []
    for(let i = 0; i < this.newProducts.length; i++){
      if(this.newProducts[i].id != id){
        nP.push(this.newProducts[i])
      }
    }
    this.newProducts = nP
  }
  
  like(id: number){
    for(let i = 0; i < products.length; i++){
      if(products[i].id == id){
        if(!products[i].liked){
          products[i].likes+=1
          products[i].liked = true
          break
        }
      }
    }
    console.log(this.item)
  }

  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/