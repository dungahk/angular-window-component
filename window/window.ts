/**
 * @license
 * Emerson Jair
 *
 */

import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Directive,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: 'wc-window-title'
})
export class WcWindowTitle {}

@Directive({
  selector: 'wc-window-content'
})
export class WcWindowContent {}

// Boilerplate for applying mixins to MdToolbar.
/** @docs-private */
// export class MdToolbarBase {
//   constructor(public _renderer: Renderer2, public _elementRef: ElementRef) {}
// }
// export const _MdToolbarMixinBase = mixinColor(MdToolbarBase);


@Component({
  moduleId: module.id,
  selector: 'wc-window',
  templateUrl: 'window.html',
  styleUrls: ['window.scss'],
  host: {
    'class': 'wc-window',
    'role': 'window'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WcWindow {
  @Input() size: number = 300;
  constructor() { }

}
