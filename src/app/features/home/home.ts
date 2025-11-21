import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  bubbles = Array(20);
  words = ['Développeur Web', 'Créateur d\'Applications', 'Passionné de Code'];
  currentWord = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.typingEffect();
    }
  }

  typingEffect() {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = document.querySelector('.typed-text') as HTMLElement;
    if (!el) return;

    let wordIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let deleting = false;

    const type = () => {
      const word = this.words[wordIndex];

      if (!deleting) {
        currentText = word.slice(0, charIndex + 1);
        charIndex++;
        el.textContent = currentText;

        if (charIndex === word.length) {
          deleting = true;
          setTimeout(type, 1500);
          return;
        }

      } else {
        currentText = word.slice(0, charIndex - 1);
        charIndex--;
        el.textContent = currentText;

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % this.words.length;
        }
      }

      setTimeout(type, deleting ? 80 : 120);
    };

    type();
  }
}
