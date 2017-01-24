import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {ComponentsModule} from '../../src/app/components.module';

import {DocumentApp} from './docs.component';
import {DocSampleComponent} from './support/doc-sample.component';

import {HelloWorldComponent_Sample} from './HelloWorld/default.sample';
import {HelloWorldComponent_Sample_Spiffy} from './HelloWorld/spiffy.sample';

import {TodoComponent_Sample} from './todo/default.sample';

import {routing} from './docs.routing';

const samples = [
    HelloWorldComponent_Sample,
    HelloWorldComponent_Sample_Spiffy,
    TodoComponent_Sample
];

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        ComponentsModule,
        routing
    ],
    declarations: [
        DocumentApp,
        DocSampleComponent,
        ...samples
    ],
    bootstrap:    [ DocumentApp ]
})
export class DocsModule { }

platformBrowserDynamic().bootstrapModule(DocsModule);
