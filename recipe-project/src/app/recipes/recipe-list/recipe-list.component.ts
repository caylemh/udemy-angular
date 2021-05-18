import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('Lasagne', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    'https://photos.bigoven.com/recipe/hero/beef-lasagne-7b988b.jpg?h=500&w=500'),
    new Recipe('Beef Strogonov', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    'https://photos.bigoven.com/recipe/hero/beef-stroganoff-69.jpg?h=500&w=500'),
    new Recipe('Leek & Potatoe Soup', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    'https://photos.bigoven.com/recipe/hero/leek-and-potato-soup-f0aa16.jpg?h=500&w=500')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
