import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'section[mhol-welcome]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.css']
})
export class WelcomeComponent {}