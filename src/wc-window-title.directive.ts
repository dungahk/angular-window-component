import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: 'wc-window-title'
})
export class WcWindowTitleDirective {
  constructor(private el: ElementRef) { }
}
