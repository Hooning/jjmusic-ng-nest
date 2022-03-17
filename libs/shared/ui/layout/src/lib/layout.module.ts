import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@jjmusic-ng-nest/shared/utils/material';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
