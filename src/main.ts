import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { CCDComponent } from './components/ccd/ccd';
import { MHOLComponent } from './components/mhol/mhol';
import { ToolkitComponent } from './components/toolkit/toolkit';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ToolkitComponent],
  template: `
    <div class="temp">
      <a routerLink="ccd">CCD</a><a routerLink="mhol">MHOL</a>
    </div>
    <toolkit></toolkit>
    <router-outlet></router-outlet>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mhol',
      },
      {
        path: 'ccd',
        component: CCDComponent,
      },
      {
        path: 'mhol',
        component: MHOLComponent,
      },
    ]),
  ],
});
