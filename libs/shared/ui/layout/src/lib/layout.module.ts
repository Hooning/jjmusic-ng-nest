import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@jjmusic-ng-nest/shared/utils/material';
import { SharedUiFooterModule } from '@jjmusic-ng-nest/shared/ui/footer';
import { SharedUiToolbarModule } from '@jjmusic-ng-nest/shared/ui/toolbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedUiFooterModule,
    SharedUiToolbarModule,
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
