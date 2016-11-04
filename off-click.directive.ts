import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[offclick]',
  host: {
    '(click)': 'onClick($event)'
  }
})
export default class OffClickDirective {
  @Input() offclick: any;

  constructor(
    private _element_ref: ElementRef
  ) {}

  onClick(event) {
    if (!this._element_ref.nativeElement.contains(event.target)) {
      this.offclick();
    }
  }

}
