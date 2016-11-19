import { Component, OnInit, } from '@angular/core';
import { RecipeItemComponent } from './recipe-item.component';
import{ Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  directives:[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes:  Recipe[] = [] ;
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.shortday.in/wp-content/uploads/2016/07/Disha-Patani-Photos.jpg');

  
  constructor() { }

  ngOnInit() {
  }

}
