import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent implements OnInit {
  fontSize?: Number;
  color?: String;

  constructor() {}

  apply(colorInput: string, fontInput: string): void {
    this.fontSize = Number(fontInput);
    this.color = colorInput;
  }

  ngOnInit(): void {}
}
