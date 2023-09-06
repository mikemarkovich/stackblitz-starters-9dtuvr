import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'nav[mhol-nav]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'nav.html',
  styleUrls: ['nav.css']
})
export class NavComponent {}