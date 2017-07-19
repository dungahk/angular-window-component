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
    '(document:mouseup)': 'stopEvents($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WcWindowComponent implements OnInit {
  @Input() top: number = 0;
  private lastTop: number = 0;

  @Input() right: number = 0;
  private lastRight: number = 0;

  @Input() bottom: number = 0;
  private lastBottom: number = 0;

  @Input() left: number = 0;
  private lastLeft: number = 0;

  @Input('container') containerSelector: string = '';
  private container: Container;

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

  private computeAttributes() {
    // Container properties
    if (this.container.selector !== '') {
      const containerRect: ClientRect = document.querySelector(this.container.selector).getBoundingClientRect();

      this.container.width = containerRect.width;
      this.container.height = containerRect.height;

      this.width = this.width <= this.container.width ? this.width : this.container.width;
      this.height = this.height <= this.container.height ? this.height : this.container.height;

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

      this.width = this.width >= this.minWidth ? this.width : this.minWidth;
      this.height = this.height >= this.minHeight ? this.height : this.minHeight;

      this.container.top = this.container.left = this.container.right = this.container.bottom = 0;
    }

    // Initial width and height
    this.top = this.container.top + (this.container.height - this.height) / 2;
    this.right = this.container.right + (this.container.width - this.width) / 2;
    this.bottom = this.container.bottom + (this.container.height - this.height) / 2;
    this.left = this.container.left + (this.container.width - this.width) / 2;
  }

  /**
   * open
   */
  public open() {
    this.opened = true;
    if (this.container.width === 0) {
      this.computeAttributes();
    }
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
    this.opened ? this.close() : this.open();
  }

  /**
   * minimize
   */
  public minimize(event: MouseEvent) {
    if (this.minimized) {
      this.restore(event);
    } else {
      this.saveCurrentPosition();

      this.right = this.container.width - this.left - 200;
      this.bottom = this.container.height - this.top - 21;

      this.minimized = true;
      this.maximized = false;
    }
  }

  /**
   * restore
   */
  public restore(event: MouseEvent) {
    this.top = this.lastTop;
    this.right = this.lastRight;
    this.bottom = this.lastBottom;
    this.left = this.lastLeft;

    this.minimized = this.lastMinimized;
    this.maximized = this.lastMaximized;
  }

  /**
   * maximize
   */
  public maximize(event: MouseEvent) {
    this.saveCurrentPosition();
    this.top = this.container.top;
    this.right = this.container.right;
    this.bottom = this.container.bottom;
    this.left = this.container.left;

    this.maximized = true;
    this.minimized = false;
  }

  private saveCurrentPosition() {
    this.lastTop = this.top;
    this.lastRight = this.right;
    this.lastBottom = this.bottom;
    this.lastLeft = this.left;

    this.lastMinimized = this.minimized;
    this.lastMaximized = this.maximized;
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

    this.minimized = false;
    this.maximized = false;
  }

  /**
   * onMouseMove
   */
  public onMouseMove(event: MouseEvent) {
    this.preventEvents(event);

    if (this.dragging) {
      const top = this.top + event.y - this.startY;
      const bottom = this.bottom - event.y + this.startY;

      if (top >= this.container.top && bottom >= this.container.bottom) {
        this.top = top;
        this.bottom = bottom;
        this.startY = event.y;
      }

      const right = this.right - event.x + this.startX;
      const left = this.left + event.x - this.startX;

      if (right >= this.container.right && left >= this.container.left) {
        this.right = right;
        this.left = left;
        this.startX = event.x;
      }

    } else if (this.resizing) {
      const width: number = this.width, height: number = this.height;

      if (this.type.includes('top')) {
        const top = this.top + event.y - this.startY;

        const height: number = this.pageHeight - top - this.bottom;

        if (top >= this.container.top && height >= this.minHeight) {
          this.top = top;
          this.startY = event.y;
          this.height = height;
        }
      }

      if (this.type.includes('right')) {
        const right = this.right - event.x + this.startX;

        const width: number = this.pageWidth - right - this.left;

        if (right >= this.container.right && width >= this.minWidth) {
          this.right = right;
          this.startX = event.x;
          this.width = width;
        }
      }

      if (this.type.includes('bottom')) {
        const bottom = this.bottom - event.y + this.startY;

        const height: number = this.pageHeight - this.top - bottom;

        if (bottom >= this.container.bottom && height >= this.minHeight) {
          this.bottom = bottom;
          this.startY = event.y;
          this.height = height;
        }
      }

      if (this.type.includes('left')) {
        const left = this.left + event.x - this.startX;

        const width: number = this.pageWidth - this.right - left;

        if (left >= this.container.left && width >= this.minWidth) {
          this.left = left;
          this.startX = event.x;
          this.width = width;
        }
      }
    }
  }

  /**
   * stopEvents
   */
  public stopEvents(event: MouseEvent) {
    this.dragging = false;
    this.resizing = false;
  }

  private preventEvents(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

}
