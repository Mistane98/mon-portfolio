import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  styles: [`
    nav{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;background:#111;color:#fff}
    a{color:inherit;text-decoration:none}
    .links{display:flex;gap:1rem}
    @media (max-width:720px){ .links{display:none} }
  `]
})
export class Navbar {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}


