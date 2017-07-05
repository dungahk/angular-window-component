import { NgModule } from '@angular/core';

import { WcWindowComponent } from 'window.component';
import { WcWindowTitle } from 'window-title.directive';
import { WcWindowContent } from 'window-content.directive';

@NgModule({
  imports: [],
  exports: [WcWindowComponent, WcWindowTitle, WcWindowContent],
  declarations: [WcWindowComponent, WcWindowTitle, WcWindowContent],
})
export class WcWindowModule {}
