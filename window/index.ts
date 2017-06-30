/**
 * @license
 * Copyright Emerson Jair
 *
 */

import { NgModule } from '@angular/core';
import { WcWindow, WcWindowTitle, WcWindowContent } from './window';


@NgModule({
  imports: [],
  exports: [WcWindow, WcWindowTitle, WcWindowContent],
  declarations: [WcWindow, WcWindowTitle, WcWindowContent],
})
export class WcWindowModule {}


export * from './window';
