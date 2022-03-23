import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list.component';
import { MaterialModule } from '@jjmusic-ng-nest/shared/utils/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [SidenavListComponent],
  exports: [SidenavListComponent],
})
export class SharedUiSidenavListModule {}
