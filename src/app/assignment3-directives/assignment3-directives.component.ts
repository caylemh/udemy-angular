import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3-directives',
  templateUrl: './assignment3-directives.component.html',
  styles: [`
    .changeColor {
      color: white;
    }
  `]
})
export class Assignment3DirectivesComponent implements OnInit {

  showDetails = false;
  count = 0;
  clickCount = [];

  onShowDetails() {
    this.clickCount.push(this.count);
    //console.log(this.clickCount);
    // if(this.showDetails) {
    //   this.showDetails = false;      // Old Way, Inefficient
    // } else {
    //   this.showDetails = true;
    // }
    this.showDetails = !this.showDetails;

    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
