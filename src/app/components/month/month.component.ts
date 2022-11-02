import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})


export class MonthComponent implements OnInit {

  monthSelect = '';


  months = [
    { key: 'January', value: '01'  },
    { key: 'February', value: '02'  },
    { key: 'March', value: '03' },
    { key: 'April', value: '04'  },
    { key: 'May', value: '05' },
    { key: 'June', value: '06' },
    { key: 'July', value: '07'  },
    { key: 'August', value: '08' },
    { key: 'September', value: '09'},
    { key: 'October', value: '10'},
    { key: 'November', value: '11' },
    { key: 'December', value: '12' },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.monthSelect);
  }

  onSelected(month: String) {
    console.log('month::::: ' + month);
    console.log()

  }

}


