import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';

import { StateService } from './state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({}),
  ],
  declarations: []
})
export class CoreModule { }
