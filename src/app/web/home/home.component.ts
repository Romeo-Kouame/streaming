import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  heroSectionBgImage = 'assets/images/hero-section.png';
  championBg = 'assets/images/champions.png'

  exclusiveMovies = [
    { title: 'Film 1', image: 'assets/images/movies/img-12.jpeg' },
    { title: 'Film 2', image: 'assets/images/movies/img-3.webp' },
    { title: 'Film 3', image: 'assets/images/movies/img-9.jpg' },
    { title: 'Film 4', image: 'assets/images/movies/img-8.jpg' },
    { title: 'Film 5', image: 'assets/images/movies/img-11.jpg' },
    { title: 'Film 6', image: 'assets/images/movies/img-15.jpg' }
  ];
  
  replayMovies = [
    { title: 'Replay 1', image: 'assets/images/movies/img-13.jpeg' },
    { title: 'Replay 2', image: 'assets/images/movies/img-16.jpg' },
    { title: 'Replay 3', image: 'assets/images/movies/img-2.jpg' },
    { title: 'Replay 4', image: 'assets/images/movies/img-1.jpg' },
    { title: 'Replay 5', image: 'assets/images/movies/img-7.jpg' },
    { title: 'Replay 7', image: 'assets/images/movies/img-17.jpg' },

  ];
  
  whyChooseUs = [
    {
      icons: ['assets/images/icons/moniteur_tel.png'],
      title: 'Pour plus de flexibilité',
      description: `Regarder sur mobile ou sur plusieurs appareils`
    },
    {
      icons: ['assets/images/icons/download.png'],
      title: 'Pour les économiseurs de données',
      description: `Téléchargez pour regarder hors ligne à tout moment`
    },
    {
      icons: ['assets/images/icons/caf.png'],
      title: 'Pour le Championnat Africain',
      description: `Tous les matchs  en direct`
    },
    {
      icons: ['assets/images/icons/plays.png'],
      title: 'Pour le contrôle des données',
      description: `Plusieurs paramètres d’enregistrements des données`
    },
    {
      icons: ['assets/images/icons/wallet.png'],
      title: 'Pour des paiements faciles',
      description: `Plusieurs façon de payer. Annulez à tout moment`
    },
    {
      icons: ['assets/images/icons/start.png'],
      title: 'Pour la diversité',
      description: `Plus de succès africains et mondiaux`
    }
  ];
  
  supportedDevices = [
    {
      name: `iOS, Android et Huawei`,
      icon: 'assets/images/icons/smartphone.png'
    },
    {
      name: `Window et Mac`,
      icon: 'assets/images/icons/laptop.png'
    },
    {
      name: `Choisir tes modèles`,
      icon: 'assets/images/icons/monitor.png'
    }
  ];
  
  faqs = [
    {
      question: 'Comment puis-je m\'abonner ?',
      answer: 'Vous pouvez vous abonner en cliquant sur "Commencer" et en choisissant la formule qui vous convient.'
    },
    {
      question: 'Puis-je annuler mon abonnement ?',
      answer: 'Oui, vous pouvez annuler votre abonnement à tout moment depuis votre profil.'
    },
    {
      question: 'Sur combien d\'appareils puis-je regarder ?',
      answer: 'Selon votre formule, vous pouvez regarder sur 1 à 4 appareils simultanément.'
    },
    {
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Non, nos prix sont transparents. Vous payez uniquement le prix affiché de votre formule.'
    },
    {
      question: 'Puis-je télécharger du contenu ?',
      answer: 'Oui, avec les formules Standard et Premium, vous pouvez télécharger du contenu pour le regarder offline.'
    }
  ];

  constructor(
    private router: Router
  ) {}
  
  ngOnInit(): void {
      
  }

  goToGetStarted(): void {
    this.router.navigateByUrl('plans');
  }

  getCodePromo(): void {}

  choixPlan(): void {}

}
