import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe','Testing Recipes','http://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg'),
    new Recipe('Test Recipe2','Testing Recipes 2','http://natashaskitchen.com/wp-content/uploads/2017/08/Grilled-Steak-Kabobs-4.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
