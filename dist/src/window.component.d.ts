export declare class WcWindowComponent {
    opened: boolean;
    top: number;
    private lastTop;
    right: number;
    private lastRight;
    bottom: number;
    private lastBottom;
    left: number;
    private lastLeft;
    startX: number;
    startY: number;
    minimized: boolean;
    private lastMinimized;
    maximized: boolean;
    private lastMaximized;
    private dragging;
    private resizing;
    private type;
    constructor();
    /**
     * open
     */
    open(): void;
    /**
     * close
     */
    close(): void;
    /**
     * toggle
     */
    toggle(): void;
    /**
     * minimize
     */
    minimize(event: MouseEvent): void;
    /**
     * restore
     */
    restore(event: MouseEvent): void;
    /**
     * maximize
     */
    maximize(event: MouseEvent): void;
    private saveCurrentPosition();
    /**
     * startDrag
     */
    startDrag(event: MouseEvent): void;
    /**
     * startResize
     */
    startResize(event: MouseEvent, type: string): void;
    /**
     * onMouseMove
     */
    onMouseMove(event: MouseEvent): void;
    /**
     * stopEvents
     */
    stopEvents(event: MouseEvent): void;
}
