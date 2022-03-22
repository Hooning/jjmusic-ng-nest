import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output()
  sidenavToggle = new EventEmitter<void>();

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
