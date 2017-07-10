import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: 'wc-window-content'
})
export class WcWindowContentDirective {
  constructor(private el: ElementRef) { }
}
