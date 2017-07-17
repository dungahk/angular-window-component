import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: 'wc-window-footer'
})
export class WcWindowFooterDirective {
  constructor(private el: ElementRef) { }
}
