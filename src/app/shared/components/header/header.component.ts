import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output()
  toggleDrawer = new EventEmitter<void>();

  toggleMatDrawer() {
    this.toggleDrawer.emit();
  }
}
