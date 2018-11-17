import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', 'https://bit.ly/2qZb3xz'),
    new Recipe('A test recipe 2', 'This is just another test', 'https://bit.ly/2qZb3xz'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
