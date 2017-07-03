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

@Component({
  moduleId: module.id,
  selector: 'wc-window',
  templateUrl: 'window.html',
  styleUrls: ['window.scss'],
  host: {
    'class': 'wc-window',
    'role': 'window',
    '[class.wc-window-opened]': 'opened',
    '[class.wc-window-minimized]': 'minimized',
    '[class.wc-window-maximized]': 'maximized',
    '[style.width]': 'size',
    '[style.left.px]' : 'left',
    '[style.top.px]' : 'top',
    '(document:mousemove)': 'drag($event)',
    '(document:mouseup)': 'stopDrag($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WcWindow {
  @Input() opened: boolean = false;

  @Input() size: string = '300px';
  private lastSize: string = '300px';

  @Input() top: number = 8;
  private lastTop: number = 8;

  @Input() left: number = 8;
  private lastLeft: number = 8;

  public startX: number = 0;
  public startY: number = 0;

  public minimized: boolean = false;
  public maximized: boolean = false;

  private dragging: boolean = false;

  constructor() { }

  /**
   * open
   */
  public open() {
    this.opened = true;
  }

  /**
   * close
   */
  public close() {
    this.opened = false;
  }

  /**
   * toggle
   */
  public toggle() {
    this.opened = !this.opened;
  }

  /**
   * minimize
   */
  public minimize(event: MouseEvent) {
    if (this.minimized) {
      this.restore(event);
    } else {
      this.lastTop = this.top;
      this.lastLeft = this.left;
      this.lastSize = this.size;
    }
    this.minimized = !this.minimized;
    this.maximized = false;
  }

  /**
   * restore
   */
  public restore(event: MouseEvent) {
    this.minimized = false;
    this.maximized = false;

    this.top = this.lastTop;
    this.left = this.lastLeft;
    this.size = this.lastSize;
  }

  /**
   * maximize
   */
  public maximize(event: MouseEvent) {
    this.maximized = true;

    this.lastTop = this.top;
    this.top = 0;

    this.lastLeft = this.left;
    this.left = 0;

    this.lastSize = this.size;
    this.size = 'calc(100% - 20px)';
  }

  /**
   * startDrag
   */
  public startDrag(event: MouseEvent) {
    this.dragging = true;
    this.startX = event.x;
    this.startY = event.y;
  }

  /**
   * drag
   */
  public drag(event: MouseEvent) {
    if (this.dragging) {
      this.left += event.x - this.startX;
      this.startX = event.x;

      this.top += event.y - this.startY;
      this.startY = event.y;
    }
  }

  /**
   * stopDrag
   */
  public stopDrag(event: MouseEvent) {
    this.dragging = false;
  }

}
