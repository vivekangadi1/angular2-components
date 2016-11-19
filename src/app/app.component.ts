import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives:[HeaderComponent,RecipeListComponent]
})
export class AppComponent {
  title = 'rb works!';
}
