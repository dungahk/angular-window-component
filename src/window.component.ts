import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: 'wc-window',
  templateUrl: 'window.component.html',
  styleUrls: ['window.component.scss'],
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
export class WcWindowComponent {
  @Input() opened: boolean = false;

  @Input() top: number = 0;
  private lastTop: number = 0;

  @Input() right: number = 0;
  private lastRight: number = 0;

  @Input() bottom: number = 0;
  private lastBottom: number = 0;

  @Input() left: number = 0;
  private lastLeft: number = 0;

  public startX: number = 0;
  public startY: number = 0;

  public minimized: boolean = false;
  private lastMinimized: boolean = false;

  public maximized: boolean = true;
  private lastMaximized: boolean = true;

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
      this.saveCurrentPosition();

      const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

      const height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

      this.right = width - this.left - 200;
      this.bottom = height - this.top - 21;

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
