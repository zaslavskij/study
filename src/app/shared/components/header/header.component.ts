import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output()
  toggleDrawer = new EventEmitter<void>();

  ngOnInit(): void {}

  toggleMatDrawer() {
    this.toggleDrawer.emit();
  }
}
