import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {

  sinImputarValue : string = '0';
  monthSelect = '';
  years: String[] = [];
  yearSelect: String = '2021';
  monthsSelect: String = '01';
  saleAmount: string = '';
  taxAmount: string = '';
  surcharge: string = '0';
  penalty: string = '0';
  totalsp: string = '0';
  nextStep = 1;

  yearSelectName: any = '';
  monthsSelectName: any = '';
  payAmount: string = '';
  sinImputarName: any = '';


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
    console.log(this.sinImputarValue)
    let currentDate = new Date()
    console.log('currentDate' + currentDate);
    let currentYear = currentDate.getFullYear();
    console.log('currentYear' + currentYear);

    for (let i = 2020; i < currentYear; i++) {
      let y = i.toString();
      this.years.push(y);
    }

    console.log(this.years)
  }

  handleChange(c: string) {
    this.sinImputarValue = c;

    if(this.sinImputarValue == '0') {
      this.sinImputarName = 'Ordinary Filing'
    } else if (this.sinImputarValue == '1') {
      this.sinImputarName = 'Additional Filing'
    }

    console.log('sinImputarName:::::' + this.sinImputarName);

  }

  onSelectedMonth(month: String) {
    this.monthsSelect = month;
    console.log('month::::: ' + month);

    const m = this.months.find((obj) => {

      return obj.value === month;

    });

    this.monthsSelectName = m?.key;
  }

  onSelectedYear(year: String) {
    this.yearSelect = year;
    console.log('this.yearSelect:::' + this.yearSelect);

  }

  isNumberKey(evt: any){
    console.log('saleAmount::: ' );
    console.log(this.saleAmount);
    let taxAmt = (parseInt(this.saleAmount)*0.07)
    console.log(taxAmt);
    let payAmt = (parseInt(this.saleAmount) + taxAmt)
    this.payAmount = this.formatMoney(payAmt);
    this.saleAmount = this.formatMoney(this.saleAmount);
    this.taxAmount = this.formatMoney(taxAmt);

  }

  formatMoney(number: any) {
    console.log(number);
    return Number(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  next() {
    console.log('next');
    this.nextStep = 2 ;

    console.log(this.nextStep);

  }


}
