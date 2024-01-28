import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [AppComponent, WidgetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const element = createCustomElement(WidgetComponent, { injector: this.injector });
    customElements.define('likes-widget', element);
  }

}
