import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is test', 'https://atmedia.imgix.net/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf?w=800&fit=max'),
    new Recipe('A test recipe 2', 'this is test 2', 'https://atmedia.imgix.net/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf?w=800&fit=max')
  ]

  constructor() { }

  ngOnInit() {
  }

}
