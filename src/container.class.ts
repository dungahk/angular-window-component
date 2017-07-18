export class Container {
  selector: string;

  top: number;
  right: number;
  bottom: number;
  left: number;

  width: number;
  height: number;

  constructor(selector: string, top?: number, right?: number, bottom?: number, left?: number, width?: number, height?: number) {
    this.selector = selector;

    this.top = top || 0;
    this.right = right || 0;
    this.bottom = bottom || 0;
    this.left = left || 0;

    this.width = width || 0;
    this.height = height || 0;
  }
}
