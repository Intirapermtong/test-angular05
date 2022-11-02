import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleAmountComponent implements OnInit {

  @Output() OnSaleAmount = new EventEmitter();

  saleAmount: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  isNumberKey(evt: any){
    console.log('saleAmount::: ' );
    console.log(this.saleAmount);
    this.saleAmount = this.formatMoney(this.saleAmount);
    this.OnSaleAmount.emit(this.saleAmount)

  }

  formatMoney(number: any) {
    console.log(number);
    return Number(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

}
