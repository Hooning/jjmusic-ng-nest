import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidenavListComponent],
  exports: [SidenavListComponent],
})
export class SharedUiSidenavListModule {}
