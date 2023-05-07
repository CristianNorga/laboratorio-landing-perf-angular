import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: 'appId', useValue: 'serverApp' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
