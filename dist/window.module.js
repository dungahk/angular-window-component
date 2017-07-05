"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var window_component_1 = require("window.component");
var window_title_directive_1 = require("window-title.directive");
var window_content_directive_1 = require("window-content.directive");
var WcWindowModule = (function () {
    function WcWindowModule() {
    }
    WcWindowModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [window_component_1.WcWindowComponent, window_title_directive_1.WcWindowTitle, window_content_directive_1.WcWindowContent],
                    declarations: [window_component_1.WcWindowComponent, window_title_directive_1.WcWindowTitle, window_content_directive_1.WcWindowContent],
                },] },
    ];
    /** @nocollapse */
    WcWindowModule.ctorParameters = function () { return []; };
    return WcWindowModule;
}());
exports.WcWindowModule = WcWindowModule;
//# sourceMappingURL=window.module.js.map