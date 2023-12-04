import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{ counter }}</h3>
    <div>
      <button (click)="increaseBy(1)" class="btn btn-primary me-2">+1</button>
      <button class="btn btn-warning me-2" (click)="resetCounter()">
        Reset
      </button>
      <button (click)="increaseBy(-1)" class="btn btn-danger">-1</button>
    </div>`,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
