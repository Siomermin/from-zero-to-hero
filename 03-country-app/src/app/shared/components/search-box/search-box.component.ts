import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';


  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue() {
    const value = this.txtInput.nativeElement.value;

    this.onValue.emit(value);
  }

}
