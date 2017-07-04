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
    // '[style.width]': 'size',
    '[style.top.px]' : 'top',
    '[style.right.px]' : 'right',
    '[style.bottom.px]' : 'bottom',
    '[style.left.px]' : 'left',
    '(document:mousemove)': 'onMouseMove($event)',
    '(document:mouseup)': 'stopEvents($event)'
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

  @Input() right: number = 8;
  private lastRight: number = 8;

  @Input() bottom: number = 8;
  private lastBottom: number = 8;

  @Input() left: number = 8;
  private lastLeft: number = 8;

  public startX: number = 0;
  public startY: number = 0;

  public minimized: boolean = false;
  public maximized: boolean = false;

  private dragging: boolean = false;
  private resizing: boolean = false;
  private type: string;

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
    this.top = 4;

    this.lastRight = this.right;
    this.right = 4;

    this.lastBottom = this.bottom;
    this.bottom = 4;

    this.lastLeft = this.left;
    this.left = 4;

    // this.lastSize = this.size;
    // this.size = 'calc(100% - 20px)';
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
   * startResize
   */
  public startResize(event: MouseEvent, type: string) {
    this.resizing = true;
    this.type = type;

    this.startX = event.x;
    this.startY = event.y;
  }

  /**
   * onMouseMove
   */
  public onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      this.top += event.y - this.startY;
      this.bottom -= event.y - this.startY;
      this.startY = event.y;

      this.left += event.x - this.startX;
      this.right -= event.x - this.startX;
      this.startX = event.x;
    } else if (this.resizing) {
      if (this.type.includes('top')) {
        this.top += event.y - this.startY;
      }
      if (this.type.includes('right')) {
        this.right -= event.x - this.startX;
      }
      if (this.type.includes('bottom')) {
        this.bottom -= event.y - this.startY;
      }
      if (this.type.includes('left')) {
        this.left += event.x - this.startX;
      }

      this.startY = event.y;
      this.startX = event.x;
    }
  }

  /**
   * stopEvents
   */
  public stopEvents(event: MouseEvent) {
    this.dragging = false;
    this.resizing = false;
  }

}
