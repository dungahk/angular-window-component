/**
 * @license
 * Copyright Emerson Jair
 *
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WcWindow, WcWindowTitle, WcWindowContent } from './window';


@NgModule({
  imports: [BrowserModule],
  exports: [WcWindow, WcWindowTitle, WcWindowContent],
  declarations: [WcWindow, WcWindowTitle, WcWindowContent],
})
export class WcWindowModule {}


export * from './window';
