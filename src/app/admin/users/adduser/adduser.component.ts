import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    var c = confirm("Are you sure you want to submit the details ?");
    var status = document.getElementById("content");
    if (c == true) {

    } else {

    }
  }

}
