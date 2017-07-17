import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcWindowComponent } from './wc-window.component';
import { WcWindowContentDirective } from './wc-window-content.directive';
import { WcWindowTitleDirective } from './wc-window-title.directive';
import { WcWindowFooterDirective } from './wc-window-footer.directive';

export * from './wc-window.component';
export * from './wc-window-content.directive';
export * from './wc-window-title.directive';
export * from './wc-window-footer.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WcWindowComponent,
    WcWindowContentDirective,
    WcWindowTitleDirective,
    WcWindowFooterDirective
  ],
  exports: [
    WcWindowComponent,
    WcWindowContentDirective,
    WcWindowTitleDirective,
    WcWindowFooterDirective
  ]
})
export class WcWindowModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WcWindowModule
    };
  }
}
