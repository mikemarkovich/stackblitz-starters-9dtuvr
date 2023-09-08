import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrandingComponent } from './branding/branding';
import { HomeComponent } from './home/home';
import { NavComponent } from './nav/nav';

@Component({
  selector: 'mhol',
  standalone: true,
  imports: [CommonModule, BrandingComponent, NavComponent, HomeComponent],
  templateUrl: 'mhol.html',
  styleUrls: ['mhol.css'],
})
export class MHOLComponent {}
