import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  years: String[] = [];
  yearSelect: String = '';


  constructor() { }

  ngOnInit(): void {

    let currentDate = new Date()
    console.log('currentDate' + currentDate);
    let currentYear = currentDate.getFullYear();
    console.log('currentYear' + currentYear);

    for (let i = 2020; i < currentYear; i++) {
      let y = i.toString();
      this.years.push(y);
    }

    console.log(this.years);
  }

  onSelected(year: String) {
    this.yearSelect = year;
    console.log('this.yearSelect:::' + this.yearSelect);
  }
}
