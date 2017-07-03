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
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';

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
    '[style.left.px]' : 'left',
    '[style.top.px]' : 'top',
    '(document:mousemove)': 'drag($event)',
    '(document:mouseup)': 'stopDrag($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WcWindow {
  @Input() size: number = 300;
  @Input() opened: boolean = false;
  @Input() left: number = 8;
  @Input() top: number = 8;

  public startX: number = 0;
  public startY: number = 0;
  public dragging: boolean = false;

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

  }

  /**
   * restore
   */
  public restore(event: MouseEvent) {

  }

  /**
   * maximize
   */
  public maximize(event: MouseEvent) {

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
