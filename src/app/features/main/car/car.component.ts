import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Car } from '../../../interfaces/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent implements OnChanges, OnInit {
  @Input()
  car!: Car;

  public imagePath!: string;

  private buildImgUrl(path: string): string {
    return `url(${path})`;
  }

  public ngOnInit(): void {
    if (this.car.image) this.imagePath = this.buildImgUrl(this.car.image);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const path = changes['imageUrl'];
    if (path && typeof path === 'string') {
      this.imagePath = this.buildImgUrl(path);
    }
  }
}
