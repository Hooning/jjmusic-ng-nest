import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '@jjmusic-ng-nest/shared/utils/material';
import { RouterModule } from '@angular/router';
import { SharedUiUserMenuModule } from '@jjmusic-ng-nest/shared/ui/user-menu';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, SharedUiUserMenuModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class SharedUiToolbarModule {}
