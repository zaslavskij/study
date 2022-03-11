import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AsideComponent } from './components/aside/aside.component';
import { DiscountPipe } from './pipes/discount/discount.pipe';

@NgModule({
  declarations: [HeaderComponent, AsideComponent, DiscountPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
    exports: [HeaderComponent, AsideComponent, DiscountPipe],
})
export class SharedModule {}
