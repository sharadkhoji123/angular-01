import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent{
  birthday = new Date(1988, 3, 15);
  toggle = true;
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  power = 5;
  factor = 1;
}