import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@jjmusic-ng-nest/shared/utils/material';
import { SharedUiFooterModule } from '@jjmusic-ng-nest/client/shared/ui/footer';
import { SharedUiToolbarModule } from '@jjmusic-ng-nest/shared/ui/toolbar';
import { SharedUiSidenavListModule } from '@jjmusic-ng-nest/shared/ui/sidenav-list';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    SharedUiFooterModule,
    SharedUiToolbarModule,
    SharedUiSidenavListModule,
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
