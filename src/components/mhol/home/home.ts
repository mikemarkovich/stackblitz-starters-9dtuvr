import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome";

@Component({
  selector: 'main[mhol-home]',
  standalone: true,
  imports: [CommonModule, WelcomeComponent],
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomeComponent {}