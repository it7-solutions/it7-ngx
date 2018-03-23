import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { It7AjaxService } from './it7-ajax.service';

@NgModule({
  imports: [CommonModule, HttpModule]
})
export class It7HttpModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: It7HttpModule,
      providers: [It7AjaxService]
    };
  }
}
