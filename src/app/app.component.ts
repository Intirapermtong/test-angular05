import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  DataSaleAmount : number = 0
  title = 'test-angular05';
  public step!: string;
  currentDate = new Date();


}





