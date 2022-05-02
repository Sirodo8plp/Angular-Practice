import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  age: number;
  city: string;
}

interface NestedPerson {
  name: string;
  locations: string[];
}

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  cities?: string[];
  people?: Person[];
  nestedPeople?: NestedPerson[];

  constructor() {}

  ngOnInit(): void {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];

    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 12, city: 'Miami' },
      { name: 'Peter', age: 22, city: 'New York' },
    ];

    this.nestedPeople = [
      { name: 'Theo', locations: ['Miami', 'New York'] },
      { name: 'George', locations: ['Athens', 'Murcia'] },
    ];
  }
}
