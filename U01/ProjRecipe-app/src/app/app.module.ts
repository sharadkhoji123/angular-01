import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipebookComponent } from './recipebook/recipebook.component'
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component'
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipebook/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component'
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './recipebook/recipe-list/recipe-item/recipe-item.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipebookComponent,
    ShoppinglistComponent,
    HeaderComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
