import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrandingComponent } from './branding/branding';
import { NavComponent } from './nav/nav';

@Component({
  selector: 'mhol',
  standalone: true,
  imports: [CommonModule, BrandingComponent, NavComponent],
  templateUrl: 'mhol.html',
  styleUrls: ['mhol.css'],
})
export class MHOLComponent {}
