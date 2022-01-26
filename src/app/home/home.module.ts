import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    SharedModule
  ]
})
export class HomeModule { }
