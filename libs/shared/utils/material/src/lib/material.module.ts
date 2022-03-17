import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [FlexLayoutModule, MatToolbarModule],
  exports: [FlexLayoutModule, MatToolbarModule]
})
export class MaterialModule {}
