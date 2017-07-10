import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcWindowComponent } from './wc-window.component';
import { WcWindowContentDirective } from './wc-window-content.directive';
import { WcWindowTitleDirective } from './wc-window-title.directive';

export * from './wc-window.component';
export * from './wc-window-content.directive';
export * from './wc-window-title.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WcWindowComponent,
    WcWindowContentDirective,
    WcWindowTitleDirective
  ],
  exports: [
    WcWindowComponent,
    WcWindowContentDirective,
    WcWindowTitleDirective
  ]
})
export class WcWindowModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WcWindowModule
    };
  }
}
