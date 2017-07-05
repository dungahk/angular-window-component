import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from "@angular/core";
var WcWindowComponent = (function () {
    function WcWindowComponent() {
        this.opened = false;
        this.top = 0;
        this.lastTop = 0;
        this.right = 0;
        this.lastRight = 0;
        this.bottom = 0;
        this.lastBottom = 0;
        this.left = 0;
        this.lastLeft = 0;
        this.startX = 0;
        this.startY = 0;
        this.minimized = false;
        this.lastMinimized = false;
        this.maximized = true;
        this.lastMaximized = true;
        this.dragging = false;
        this.resizing = false;
    }
    /**
     * open
     */
    WcWindowComponent.prototype.open = function () {
        this.opened = true;
    };
    /**
     * close
     */
    WcWindowComponent.prototype.close = function () {
        this.opened = false;
    };
    /**
     * toggle
     */
    WcWindowComponent.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    /**
     * minimize
     */
    WcWindowComponent.prototype.minimize = function (event) {
        if (this.minimized) {
            this.restore(event);
        }
        else {
            this.saveCurrentPosition();
            var width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
            var height = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;
            this.right = width - this.left - 200;
            this.bottom = height - this.top - 21;
            this.minimized = true;
            this.maximized = false;
        }
    };
    /**
     * restore
     */
    WcWindowComponent.prototype.restore = function (event) {
        this.top = this.lastTop;
        this.right = this.lastRight;
        this.bottom = this.lastBottom;
        this.left = this.lastLeft;
        this.minimized = this.lastMinimized;
        this.maximized = this.lastMaximized;
    };
    /**
     * maximize
     */
    WcWindowComponent.prototype.maximize = function (event) {
        this.saveCurrentPosition();
        this.top = this.right = this.bottom = this.left = 0;
        this.maximized = true;
        this.minimized = false;
    };
    WcWindowComponent.prototype.saveCurrentPosition = function () {
        this.lastTop = this.top;
        this.lastRight = this.right;
        this.lastBottom = this.bottom;
        this.lastLeft = this.left;
        this.lastMinimized = this.minimized;
        this.lastMaximized = this.maximized;
    };
    /**
     * startDrag
     */
    WcWindowComponent.prototype.startDrag = function (event) {
        this.dragging = true;
        this.startX = event.x;
        this.startY = event.y;
    };
    /**
     * startResize
     */
    WcWindowComponent.prototype.startResize = function (event, type) {
        this.resizing = true;
        this.type = type;
        this.startX = event.x;
        this.startY = event.y;
        this.minimized = false;
        this.maximized = false;
    };
    /**
     * onMouseMove
     */
    WcWindowComponent.prototype.onMouseMove = function (event) {
        if (this.dragging) {
            this.top += event.y - this.startY;
            this.bottom -= event.y - this.startY;
            this.startY = event.y;
            this.left += event.x - this.startX;
            this.right -= event.x - this.startX;
            this.startX = event.x;
        }
        else if (this.resizing) {
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
    };
    /**
     * stopEvents
     */
    WcWindowComponent.prototype.stopEvents = function (event) {
        this.dragging = false;
        this.resizing = false;
    };
    WcWindowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wc-window',
                    templateUrl: 'window.component.html',
                    styleUrls: ['window.component.scss'],
                    host: {
                        'class': 'wc-window',
                        'role': 'window',
                        '[class.wc-window-opened]': 'opened',
                        '[class.wc-window-minimized]': 'minimized',
                        '[style.top.px]': 'top',
                        '[style.right.px]': 'right',
                        '[style.bottom.px]': 'bottom',
                        '[style.left.px]': 'left',
                        '(document:mousemove)': 'onMouseMove($event)',
                        '(document:mouseup)': 'stopEvents($event)'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    WcWindowComponent.ctorParameters = function () { return []; };
    WcWindowComponent.propDecorators = {
        'opened': [{ type: Input },],
        'top': [{ type: Input },],
        'right': [{ type: Input },],
        'bottom': [{ type: Input },],
        'left': [{ type: Input },],
    };
    return WcWindowComponent;
}());
export { WcWindowComponent };
//# sourceMappingURL=window.component.js.map