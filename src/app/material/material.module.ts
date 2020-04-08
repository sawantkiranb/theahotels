import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
