import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  allowNewUser= true;
  username='';
  constructor() { 
   }

  ngOnInit(): void {
  }
  reset(){
    this.username='';
  }
}
