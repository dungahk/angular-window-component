import { NgModule } from '@angular/core';
import { WcWindowComponent } from 'window.component';
import { WcWindowTitle } from 'window-title.directive';
import { WcWindowContent } from 'window-content.directive';
var WcWindowModule = (function () {
    function WcWindowModule() {
    }
    WcWindowModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [WcWindowComponent, WcWindowTitle, WcWindowContent],
                    declarations: [WcWindowComponent, WcWindowTitle, WcWindowContent],
                },] },
    ];
    /** @nocollapse */
    WcWindowModule.ctorParameters = function () { return []; };
    return WcWindowModule;
}());
export { WcWindowModule };
//# sourceMappingURL=window.module.js.map