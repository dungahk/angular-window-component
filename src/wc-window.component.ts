import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit } from "@angular/core";
import { Container } from './container.class';

@Component({
  selector: 'wc-window',
  templateUrl: './wc-window.component.html',
  styleUrls: ['./wc-window.component.scss'],
  host: {
    'class': 'wc-window',
    'role': 'window',
    '[class.wc-window-opened]': 'opened',
    '[class.wc-window-minimized]': 'minimized',
    '[style.top.px]' : 'top',
    '[style.right.px]' : 'right',
    '[style.bottom.px]' : 'bottom',
    '[style.left.px]' : 'left',
    '(document:mousemove)': 'onMouseMove($event)',
    '(document:touchmove)': 'onTouchMove($event)',
    '(document:mouseup)': 'stopEvents()',
    '(document:touchend)': 'stopEvents()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WcWindowComponent implements OnInit {
  public top: number = 0;
  private lastTop: number = -1;

  public right: number = 0;
  private lastRight: number = -1;

  public bottom: number = 0;
  private lastBottom: number = -1;

  public left: number = 0;
  private lastLeft: number = -1;

  @Input('container') containerSelector: string = '';
  public container: Container;

  @Input() width: number = 0;
  @Input() height: number = 0;

  @Input() minWidth: number = 251;
  @Input() minHeight: number = 20;

  private pageWidth: number = 251;
  private pageHeight: number = 20;

  public startX: number = 0;
  public startY: number = 0;

  public minimized: boolean = false;
  private lastMinimized: boolean = false;

  public maximized: boolean = true;
  private lastMaximized: boolean = true;

  private opened: boolean = false;
  private dragging: boolean = false;
  private resizing: boolean = false;
  private type: string;
  private firstTimeOpen: boolean = true;

  constructor() { }

  ngOnInit() {
    this.container = new Container(this.containerSelector);

    // Page width and height
    this.pageWidth = window.innerWidth
      || document.documentElement.offsetWidth
      || document.body.offsetWidth;
    this.pageHeight = window.innerHeight
      || document.documentElement.offsetHeight
      || document.body.offsetHeight;
  }

  public getPosition() {
    return {
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left
    };
  }

  public setPosition(top: number, right: number, bottom: number, left: number) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;

    this.updateWindowSize();
  }

  private computeAttributes(): void {
    // Container properties
    if (this.container.selector !== '') {
      const containerRect: ClientRect = document.querySelector(this.container.selector).getBoundingClientRect();

      this.container.width = containerRect.width;
      this.container.height = containerRect.height;

      this.width = this.width <= this.container.width ? this.width : this.container.width;
      this.height = this.height <= this.container.height ? this.height : this.container.height;

      const header: ClientRect = document.querySelector('.wc-window-header').getBoundingClientRect();
      const title: ClientRect = document.querySelector('.wc-window-header-title').getBoundingClientRect();
      const toolbar: ClientRect = document.querySelector('.wc-window-header-toolbar').getBoundingClientRect();

      this.minWidth = this.minWidth >= (toolbar.width + title.width / 4) ? this.minWidth : (toolbar.width + title.width / 4);
      this.minHeight = this.minHeight >= header.height ? this.minHeight : header.height;

      this.width = this.width >= this.minWidth ? this.width : this.minWidth;
      this.height = this.height >= this.minHeight ? this.height : this.minHeight;

      this.container.top = containerRect.top;
      this.container.left = containerRect.left;
      this.container.right = this.pageWidth - this.container.left - this.container.width;
      this.container.bottom = this.pageHeight - this.container.top - this.container.height;
    } else {
      this.container.width = this.pageWidth;
      this.container.height = this.pageHeight;

      this.width = this.width <= this.container.width ? this.width : this.container.width;
      this.height = this.height <= this.container.height ? this.height : this.container.height;

      const header: ClientRect = document.querySelector('.wc-window-header').getBoundingClientRect();
      const title: ClientRect = document.querySelector('.wc-window-header-title').getBoundingClientRect();
      const toolbar: ClientRect = document.querySelector('.wc-window-header-toolbar').getBoundingClientRect();

      this.minWidth = this.minWidth >= (toolbar.width + title.width / 4) ? this.minWidth : (toolbar.width + title.width / 4);
      this.minHeight = this.minHeight >= header.height ? this.minHeight : header.height;

      this.width = this.width >= this.minWidth ? this.width : this.minWidth;
      this.height = this.height >= this.minHeight ? this.height : this.minHeight;

      this.container.top = this.container.left = this.container.right = this.container.bottom = 0;
    }

    // Initial width and height
    if (this.firstTimeOpen) {
      this.top = this.container.top + (this.container.height - this.height) / 2;
      this.right = this.container.right + (this.container.width - this.width) / 2;
      this.bottom = this.container.bottom + (this.container.height - this.height) / 2;
      this.left = this.container.left + (this.container.width - this.width) / 2;
    }
  }

  /**
   * open
   */
  public open(): void {
    this.opened = true;

    this.computeAttributes();

    this.firstTimeOpen = false;
  }

  /**
   * close
   */
  public close(event?: MouseEvent | TouchEvent): void {
    if (event) {
      this.preventEvents(event);
    }

    this.opened = false;
  }

  /**
   * toggle
   */
  public toggle(): void {
    this.opened ? this.close() : this.open();
  }

  /**
   * minimize
   */
  public minimize(event: MouseEvent | TouchEvent): void {
    this.preventEvents(event);

    if (this.minimized) {
      this.restore(event);
    } else {
      this.saveCurrentPosition();

      this.right = this.pageWidth - this.left - this.minWidth;
      this.bottom = this.pageHeight - this.top - this.minHeight;

      this.updateWindowSize();

      this.minimized = true;
      this.maximized = false;
    }
  }

  /**
   * restore
   */
  public restore(event: MouseEvent | TouchEvent): void {
    this.preventEvents(event);

    if (this.lastTop >= 0) {
      this.top = this.lastTop;
      this.right = this.lastRight;
      this.bottom = this.lastBottom;
      this.left = this.lastLeft;

      this.updateWindowSize();

      this.minimized = this.lastMinimized;
      this.maximized = this.lastMaximized;
    }
  }

  /**
   * maximize
   */
  public maximize(event: MouseEvent | TouchEvent): void {
    this.preventEvents(event);

    this.saveCurrentPosition();

    this.top = this.container.top;
    this.right = this.container.right;
    this.bottom = this.container.bottom;
    this.left = this.container.left;

    this.updateWindowSize();

    this.maximized = true;
    this.minimized = false;
  }

  private saveCurrentPosition(): void {
    this.lastTop = this.top;
    this.lastRight = this.right;
    this.lastBottom = this.bottom;
    this.lastLeft = this.left;

    this.lastMinimized = this.minimized;
    this.lastMaximized = this.maximized;
  }

  /**
   * onMouseDrag
   */
  public onMouseDrag(event: MouseEvent): void {
    this.startDrag(event.x, event.y);
  }

  /**
   * onTouchDrag
   */
  public onTouchDrag(event: TouchEvent): void {
    if(event.touches.length == 1) {
      this.startDrag(event.touches[0].pageX, event.touches[0].pageY);
    }
  }

  private startDrag(x: number, y: number): void {
    this.dragging = true;

    this.startX = x;
    this.startY = y;
  }

  /**
   * onMouseResize
   * Manages the resize of the window with mouse events
   */
  public onMouseResize(event: MouseEvent, type: string): void {
    this.startResize(event.x, event.y, type);
  }

  /**
   * onTouchResize
   * Manages the resize of the window with touch events
   */
  public onTouchResize(event: TouchEvent, type: string): void {
    if(event.touches.length == 1) {
      this.startResize(event.touches[0].pageX, event.touches[0].pageY, type);
    }
  }

  private startResize(x: number, y: number, type: string): void {
    this.resizing = true;
    this.type = type;

    this.startX = x;
    this.startY = y;

    this.minimized = false;
    this.maximized = false;
  }

  /**
   * onMouseMove
   */
  public onMouseMove(event: MouseEvent): void {
    this.preventEvents(event);

    this.manageMove(event.x, event.y);
  }

  /**
   * onTouchMove
   */
  public onTouchMove(event: TouchEvent): void {
    this.preventEvents(event);

    if(event.touches.length == 1) {
      this.manageMove(event.touches[0].pageX, event.touches[0].pageY);
    }
  }

  private manageMove(x: number, y: number): void {
    this.computeAttributes();

    if (this.dragging) {
      this.drag(x, y);
    } else if (this.resizing) {
      this.resize(x, y);
    }
  }

  private drag(x: number, y: number): void {
    const top = this.top + y - this.startY;
    const bottom = this.bottom - y + this.startY;

    if (top >= this.container.top && bottom >= this.container.bottom) {
      this.top = top;
      this.bottom = bottom;
      this.startY = y;
    }

    const right = this.right - x + this.startX;
    const left = this.left + x - this.startX;

    if (right >= this.container.right && left >= this.container.left) {
      this.right = right;
      this.left = left;
      this.startX = x;
    }
  }

  private resize(x: number, y: number): void {
    const width: number = this.width, height: number = this.height;

    if (this.type.includes('top')) {
      const top = this.top + y - this.startY;

      const height: number = this.pageHeight - top - this.bottom;

      if (top >= this.container.top && height >= this.minHeight) {
        this.top = top;
        this.startY = y;
        this.height = height;
      }
    }

    if (this.type.includes('right')) {
      const right = this.right - x + this.startX;

      const width: number = this.pageWidth - right - this.left;

      if (right >= this.container.right && width >= this.minWidth) {
        this.right = right;
        this.startX = x;
        this.width = width;
      }
    }

    if (this.type.includes('bottom')) {
      const bottom = this.bottom - y + this.startY;

      const height: number = this.pageHeight - this.top - bottom;

      if (bottom >= this.container.bottom && height >= this.minHeight) {
        this.bottom = bottom;
        this.startY = y;
        this.height = height;
      }
    }

    if (this.type.includes('left')) {
      const left = this.left + x - this.startX;

      const width: number = this.pageWidth - this.right - left;

      if (left >= this.container.left && width >= this.minWidth) {
        this.left = left;
        this.startX = x;
        this.width = width;
      }
    }
  }

  /**
   * stopEvents
   */
  public stopEvents(): void {
    this.dragging = false;
    this.resizing = false;
  }

  private preventEvents(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private updateWindowSize(): void {
    this.width = this.pageWidth - this.right - this.left;
    this.height = this.pageHeight - this.top - this.bottom;
  }

}
