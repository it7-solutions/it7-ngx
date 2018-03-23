import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NxModule} from '@nrwl/nx';
import {It7ButtonModule} from '@it7-ngx/it7-button';
import {It7CheckboxModule} from '@it7-ngx/it7-checkbox';
import {It7HttpModule} from '@it7-ngx/it7-http';
import {It7InputModule} from '@it7-ngx/it7-input';
import {It7PopupModule} from '@it7-ngx/it7-popup';
import {It7SelectModule} from '@it7-ngx/it7-select';
import {It7TranslateConfig, It7TranslateModule} from '@it7-ngx/it7-translate';


const translateConfig = new It7TranslateConfig();
Object.assign(translateConfig, {translations: [{code: 'text', value: 'Translated text'}]});

@NgModule({
    imports: [
        BrowserModule,
        NxModule.forRoot(),
        It7ButtonModule,
        It7CheckboxModule,
        It7HttpModule.forRoot(),
        It7InputModule,
        It7PopupModule,
        It7SelectModule,
        It7TranslateModule.forRoot()
    ],
    providers: [
        {provide: It7TranslateConfig, useValue: translateConfig}
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
