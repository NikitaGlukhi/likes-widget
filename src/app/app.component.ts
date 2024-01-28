import { Injector, Component } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(injector: Injector,) {
    const element = createCustomElement(WidgetComponent, {injector});
    customElements.define('likes-widget', element);
  }
}
