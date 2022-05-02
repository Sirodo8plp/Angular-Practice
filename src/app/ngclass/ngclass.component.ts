import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  isBordered?: boolean;
  classesObj?: Object;
  classList?: string[];

  constructor() {}

  ngOnInit(): void {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.classesObj = {
      bordered: this.isBordered,
    };
  }
}
