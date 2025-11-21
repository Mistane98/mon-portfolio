import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // ⚠️ Mets ton nom GitHub ici !
  private username = 'mistane98';

  private apiUrl = `https://api.github.com/users/${this.username}`;

  constructor(private http: HttpClient) {}

  // ➜ Informations générales du compte
  getUser() {
    return this.http.get(this.apiUrl);
  }

  // ➜ Liste des dépôts publics (triés par date)
  getRepos() {
    return this.http.get(`${this.apiUrl}/repos?sort=updated`);
  }

  // ➜ Regrouper les repos par langage
  getReposByLanguage() {
    return this.getRepos().pipe(
      map((repos: any) => {
        const stats: any = {};
        repos.forEach((repo: any) => {
          const lang = repo.language || 'Aucun langage';
          stats[lang] = (stats[lang] || 0) + 1;
        });
        return stats;
      })
    );
  }
}
