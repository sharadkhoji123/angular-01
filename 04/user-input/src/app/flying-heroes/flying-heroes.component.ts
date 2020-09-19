import { Component, OnInit } from '@angular/core';
import {HEROES} from './heroes'
import {Flyer} from './heroes'
@Component({
  selector: 'flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.scss']
})

export class FlyingHeroesComponent {

  heroes: any[] = [];
  canFly = true;
  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}