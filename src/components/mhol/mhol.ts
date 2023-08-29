import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrandingComponent } from './branding/branding';

@Component({
  selector: 'mhol',
  standalone: true,
  imports: [CommonModule, BrandingComponent],
  templateUrl: 'mhol.html',
  styleUrls: ['mhol.css'],
})
export class MHOLComponent {}
