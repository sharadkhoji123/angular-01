import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent{
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  
  addHero(newHero: string) {
      if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
