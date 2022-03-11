import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [MainComponent, CarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
