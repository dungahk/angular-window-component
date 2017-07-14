import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit } from "@angular/core";

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
  @Input() opened: boolean = false;

  @Input() top: number = 0;
  private lastTop: number = 0;

  @Input() right: number = 0;
  private lastRight: number = 0;

  @Input() bottom: number = 0;
  private lastBottom: number = 0;

  @Input() left: number = 0;
  private lastLeft: number = 0;

  @Input() width: number = 0;
  @Input() height: number = 0;

  @Input() minWidth: number = 251;
  @Input() minHeight: number = 20;

  public startX: number = 0;
  public startY: number = 0;

  private pageWidth: number = 0;
  private pageHeight: number = 0;

  public minimized: boolean = false;
  private lastMinimized: boolean = false;

  public maximized: boolean = true;
  private lastMaximized: boolean = true;

  private dragging: boolean = false;
  private resizing: boolean = false;
  private type: string;

  constructor() {
    this.pageWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    this.pageHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  }

  ngOnInit() {
    if (this.width !== 0 && this.width >= this.minWidth) {
      this.right = this.left = (this.pageWidth - this.width) / 2;
    }
    if (this.height !== 0 && this.height >= this.minHeight) {
      this.top = this.bottom = (this.pageHeight - this.height) / 2;
    }
  }

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
      this.saveCurrentPosition();

      this.right = this.pageWidth - this.left - 200;
      this.bottom = this.pageHeight - this.top - 21;

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
    this.top = this.right = this.bottom = this.left = 0;
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
    if (this.dragging) {
      const top = this.top + event.y - this.startY;
      const bottom = this.bottom - event.y + this.startY;

      if (top >= 0 && top <= this.pageHeight && bottom >= 0 && bottom <= this.pageHeight) {
        this.top = top;
        this.bottom = bottom;
        this.startY = event.y;
      }

      const right = this.right - event.x + this.startX;
      const left = this.left + event.x - this.startX;

      if (right >= 0 && right <= this.pageWidth && left >= 0 && left <= this.pageWidth) {
        this.right = right;
        this.left = left;
        this.startX = event.x;
      }

    } else if (this.resizing) {
      let top: number, right: number, bottom: number, left: number;
      const width: number = this.width;
      const height: number = this.height;

      if (this.type.includes('top')) {
        top = this.top + event.y - this.startY;

        const height: number = this.pageHeight - top - this.bottom;
        if (height >= this.minHeight && top >= 0 && top <= this.pageHeight) {
          this.height = height;
          this.top = top;
        }
      }
      if (this.type.includes('right')) {
        right = this.right - event.x + this.startX;

        const width: number = this.pageWidth - right - this.left;
        if (width >= this.minWidth && right >= 0 && right <= this.pageWidth) {
          this.width = width;
          this.right = right;
        }
      }
      if (this.type.includes('bottom')) {
        bottom = this.bottom - event.y + this.startY;

        const height: number = this.pageHeight - this.top - bottom;
        if (height >= this.minHeight && bottom >= 0 && bottom <= this.pageHeight) {
          this.height = height;
          this.bottom = bottom;
        }
      }
      if (this.type.includes('left')) {
        left = this.left + event.x - this.startX;

        const width: number = this.pageWidth - this.right - left;
        if (width >= this.minWidth && left >= 0 && left <= this.pageWidth) {
          this.width = width;
          this.left = left;
        }
      }

      if (width !== this.width) {
        this.startX = event.x;
      }

      if (height !== this.height) {
        this.startY = event.y;
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

}
