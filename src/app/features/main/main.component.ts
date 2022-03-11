import { Component, OnInit } from '@angular/core';
import {Car, carsData} from "./car/car.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  public cars: Car[] = carsData;

  ngOnInit(): void {}

  public asideShown: boolean = true;

  toggleSidebar(): void {
    this.asideShown = !this.asideShown;
  }
}
