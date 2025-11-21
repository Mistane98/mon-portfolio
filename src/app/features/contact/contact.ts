import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  // Propriétés utilisées dans le template
  model = { name: '', email: '', subject: '', message: '' };
  sending = false;
  result: { ok: boolean; msg: string } | null = null;

  constructor(private contact: ContactService) {}

  send() {
    if (!this.model.name || !this.model.email || !this.model.subject || !this.model.message) {
      this.result = { ok: false, msg: 'Merci de remplir tous les champs.' };
      return;
    }

    this.sending = true;

    this.contact.sendForm(this.model).subscribe({
      next: () => {
        this.sending = false;
        this.result = { ok: true, msg: 'Message envoyé avec succès !' };
        this.model = { name: '', email: '', subject: '', message: '' }; // reset du formulaire
      },
      error: () => {
        this.sending = false;
        this.result = { ok: false, msg: 'Erreur lors de l’envoi…' };
      }
    });
  }
}
