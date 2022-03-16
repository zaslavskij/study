import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Car } from '../../interfaces/car.interface';
import { carsMock } from '../../mocks/car.mock';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public cars: Car[] = carsMock;

  public asideShown: boolean = true;

  public toggleSidebar(): void {
    this.asideShown = !this.asideShown;
  }
}
