import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { MenuComponent } from './menu/menu.component';
import { MobilenetComponent } from './mobilenet/mobilenet.component';

@NgModule({
  declarations: [
    MenuComponent,
    MobilenetComponent
  ],
  exports:[
    MenuComponent,
    MobilenetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class SharedModule { }
