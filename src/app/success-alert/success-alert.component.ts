import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<h2>This is a SUCCESS message!!!</h2>',
  styles: [`h2{color: green; font-weight: bold}`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
