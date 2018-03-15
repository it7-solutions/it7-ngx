import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import {It7ButtonModule} from "@it7-ngx/it7-button";

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), It7ButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
