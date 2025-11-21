import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-github',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './github.html',
  styleUrl: './github.scss',
})

export class Github implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  user: any;
  repos: any[] = [];
  languages: any = {};
  loading = true;

  chart: any;
 isBrowser: boolean;

  constructor(private githubService: GithubService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // ✅ détecte le navigateur
  }

 ngOnInit() {
  if (!this.isBrowser) return; // SSR skip

  this.githubService.getUser().subscribe({
    next: u => this.user = u,
    error: err => console.error('Erreur user:', err)
  });

  this.githubService.getRepos().subscribe({
    next: (r: any) => {
      this.repos = r.slice(0, 5);
      this.loading = false;
    },
    error: err => console.error('Erreur repos:', err)
  });

  this.githubService.getReposByLanguage().subscribe({
    next: l => {
      this.languages = l;
      this.createChart();
    },
    error: err => console.error('Erreur langages:', err)
  });
}


  ngAfterViewInit() {
    if (Object.keys(this.languages).length) this.createChart();
  }

  createChart() {
    if (!this.chartCanvas) return;

    const labels = Object.keys(this.languages);
    const data = Object.values(this.languages);

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Repos par langage',
          data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });
  }
}

