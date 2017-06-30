/**
 * @license
 * Copyright Emerson Jair
 *
 */

import { NgModule } from '@angular/core';
import { MdCommonModule } from '../core';
import { MdToolbar, MdToolbarRow } from './window';


@NgModule({
  imports: [MdCommonModule],
  exports: [MdToolbar, MdToolbarRow, MdCommonModule],
  declarations: [MdToolbar, MdToolbarRow],
})
export class NgwWindowModule {}


export * from './window';
