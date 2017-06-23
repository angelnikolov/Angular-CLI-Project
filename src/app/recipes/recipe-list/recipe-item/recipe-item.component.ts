import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';

import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {

  }

  ngOnInit() {
  }

  onSelected(value) {
      this.recipeSelected.emit();
  }

}
