import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './pages/shared/toolbar.component';
import { FooterComponent } from "./pages/shared/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, FooterComponent],
  template: `
    <app-toolbar />
    <router-outlet />
    <app-footer/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ngDuka';
}
