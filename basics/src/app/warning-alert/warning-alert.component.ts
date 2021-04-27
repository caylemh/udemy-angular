import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<h2>This is a WARNING message!!!</h2>',
  styles: [`h2{color: red; font-weight: bold}`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
