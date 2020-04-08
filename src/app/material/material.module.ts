import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule
 } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
