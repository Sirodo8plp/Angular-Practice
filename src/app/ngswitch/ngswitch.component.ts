import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css'],
})
export class NgswitchComponent implements OnInit {
  a: String = 'hello world';
  constructor() {}

  ngOnInit(): void {}
}
