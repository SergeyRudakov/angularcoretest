import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatDialogModule, MatSelectModule, MatTableModule, MatGridListModule,
   MatButtonModule, MatCommonModule, MatToolbarModule, MatTabsModule, MatProgressSpinnerModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, MatDialogModule, MatSelectModule, MatTableModule, MatGridListModule, MatButtonModule, MatCommonModule,
    MatToolbarModule, MatTabsModule, MatProgressSpinnerModule, MatChipsModule
  ],
  exports: [
    MatCardModule, MatDialogModule, MatSelectModule, MatTableModule, MatGridListModule, MatButtonModule, MatCommonModule,
    MatToolbarModule, MatTabsModule, MatProgressSpinnerModule, MatChipsModule
  ],
  declarations: []
})
export class MaterialModule { }
