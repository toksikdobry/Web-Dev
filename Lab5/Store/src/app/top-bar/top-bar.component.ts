import { Component, Output, EventEmitter  } from '@angular/core';

import { products } from '../products';
import { categories } from '../category';

let catte = 'None';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  
  categories = categories

  @Output() newItemEvent = new EventEmitter<string>();
  
  category(name: string){
    this.newItemEvent.emit(name);
  }

  favourites(){

  }


}
