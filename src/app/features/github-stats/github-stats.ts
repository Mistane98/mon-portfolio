import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-stats.html',
  styleUrls: ['./github-stats.scss'],
})
export class GithubStats implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  user: any;
  repos: any[] = [];
  languages: any = {};
  loading = true;

  chart: any;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getUser().subscribe(u => this.user = u);

    this.githubService.getRepos().subscribe((r: any) => {
      this.repos = r.slice(0, 5);
      this.loading = false;
    });

    this.githubService.getReposByLanguage().subscribe(l => {
      this.languages = l;
      this.createChart();
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
