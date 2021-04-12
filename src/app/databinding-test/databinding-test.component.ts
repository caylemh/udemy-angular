import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-test',
  templateUrl: './databinding-test.component.html',
  styleUrls: ['./databinding-test.component.css']
})
export class DatabindingTestComponent implements OnInit {
  username = "";
  // allowClear = false;

  constructor() {
     this.onChangeUsername;
  }

  ngOnInit(): void {
  }

  onChangeUsername() {
    if(this.username === "") {
      return true;
    } else {
      return false;
    }
  }
      
  usernameClear() {
    this.username = "";
  }
  
}
