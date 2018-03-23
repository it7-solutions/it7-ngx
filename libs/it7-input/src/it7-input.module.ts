import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { It7InputComponent } from './it7-input/it7-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [It7InputComponent],
  exports: [It7InputComponent]
})
export class It7InputModule {}
