import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', 'https://bit.ly/2qZb3xz'),
    new Recipe('A test recipe 2', 'This is just another test', 'https://bit.ly/2qZb3xz'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
