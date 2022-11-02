import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
// import { SaleAmountComponent } from "module";

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css'],
})
export class TaxAmountComponent implements OnInit, OnChanges {

  @Input() OnSaleAmount: any = null;
  @Output() OnTaxAmount = new EventEmitter();

  taxAmount: any = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes****" );
    console.log(changes)
    if('OnSaleAmount' in changes){
      console.log("changes****" );
      console.log(changes );
      console.log(changes.OnSaleAmount.currentValue );
      this.taxAmount = changes.DataSaleAmount.currentValue
      this.formatMoney(this.taxAmount)
      this.isNumberKey(this.taxAmount)
    }
  }

  ngOnInit(): void {
    console.log('taxAmt::::::');
    console.log(this.OnSaleAmount);
  }

  isNumberKey(evt: any){
    this.taxAmount = this.formatMoney(this.taxAmount);
    console.log(this.taxAmount );

  }

  formatMoney(number: any) {
    console.log(number);
    this.OnTaxAmount.emit(number)
    return Number(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }


}
