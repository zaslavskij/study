import {Component, Input, OnInit} from '@angular/core';
import {Car} from "./car.interface";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor() { }

  @Input()
  car!: Car;

  ngOnInit(): void {
  }

}
