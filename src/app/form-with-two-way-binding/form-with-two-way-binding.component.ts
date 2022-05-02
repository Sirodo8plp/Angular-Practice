import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-with-two-way-binding',
  templateUrl: './form-with-two-way-binding.component.html',
  styleUrls: ['./form-with-two-way-binding.component.css'],
})
export class FormWithTwoWayBindingComponent implements OnInit {
  productName?: string;
  constructor() {}

  ngOnInit(): void {}
}
