import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonStatus = false;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }
  getButtonStatus(){
  //  this.log.push(this.log.length + 1);
    this.log.push(new Date())  
  return this.buttonStatus = !this.buttonStatus;
  }
getColor(){
  return this.buttonStatus === true ? 'green' : 'red';
}
}
