import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css'],
})
export class NgifComponent implements OnInit {
  a: Number = 1;
  b: Number = 2;
  str: String = 'hello world';

  constructor() {}

  isShown(): boolean {
    return true;
  }

  ngOnInit(): void {}
}
