import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[mhol-branding]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'branding.html',
  styleUrls: ['branding.css'],
})
export class BrandingComponent {}
