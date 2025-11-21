import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {

  projectList = [
    {
      name: 'Mon Portfolio Angular',
      description: 'Un site portfolio moderne construit en Angular, responsive, animations et composants standalone.',
      image: 'assets/projects/portfolio.png',
      link: '#'
    },
    {
      name: 'Application de Gestion',
      description: 'Une application complète avec tableau de bord, statistiques et authentification.',
      image: 'assets/projects/app-dashboard.png',
      link: '#'
    },
    {
      name: 'E-commerce UI',
      description: 'Interface utilisateur élégante pour un site e-commerce, pages produits, panier et checkout.',
      image: 'assets/projects/ecommerce.png',
      link: '#'
    },
    {
      name: 'Système de Pointage',
      description: 'Application permettant de gérer les présences des élèves et professeurs avec génération de rapports.',
      image: 'assets/projects/pointage.png',
      link: '#'
    },  
    {
      name: 'Blog Fullstack',
      description: 'Un blog complet avec API, espace admin, gestion d’articles, commentaires et authentification JWT.',
      image: 'assets/projects/blog.png',
      link: '#'
    },
    {
      name: 'Chat en Temps Réel',
      description: 'Application de messagerie en temps réel avec WebSocket, interface moderne et support multi-salles.',
      image: 'assets/projects/chat.png',
      link: '#'
    },
    {
      name: 'Landing Page Professionnelle',
      description: 'Une landing page marketing très moderne avec animations, sections dynamiques et CTA optimisés.',
      image: 'assets/projects/landing.png',
      link: '#'
    }
  ];

}
