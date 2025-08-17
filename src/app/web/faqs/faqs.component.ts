import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  faqs = [
    {
      question: 'Qu\'est-ce que Cinédrome ?',
      answer: 'Cinédrome est une plateforme ivoirienne de streaming de proximité dédiée au cinéma et aux arts du spectacle. Elle propose un catalogue varié de contenus multi-formats  en (PAD & LIVE) parmi lesquels nous avons des films originaux, des séries inédites, des documentaires historiques  et exclusifs célébrant la richesse culturelle  et la diversité du cinéma ivoirien et africain. Notre mission est de promouvoir l’imaginaire ivoirien.'
    },
    {
        question: 'Quels modèles d\'abonnement Cinédrome ?',
        answer: 'Cinédrome propose trois formules d\'abonnement :\n\n' +
      '• Offre Play – 1 500 F CFA : disponible uniquement sur mobile, 1 écran, accès à vos séries, films, téléfilms, podcasts, téléréalités, animations et autres contenus. Diffusion en MP4, téléchargement et visionnage hors ligne.\n\n' +
      '• Offre Premium – 2 500 F CFA : disponible sur tous les appareils et mobiles, 2 écrans simultanés, accès aux séries, films, téléfilms, podcasts, téléréalités, documentaires, animations, making-of de films cultes. Événements en direct, diffusion HD (qualité au choix), téléchargement hors ligne.\n\n' +
      '• Offre Premium Plus – 3 500 F CFA : disponible sur tous les appareils et mobiles, 2 écrans simultanés, inclut tout le contenu de l’offre Premium, diffusion des matchs locaux et internationaux, Full HD (qualité au choix), téléchargement hors ligne.\n\n' +
      '⚠ L’offre de contenus est évolutive. Le prix exact dépend de la formule (tous appareils ou mobile). Le championnat africain et la ligue africaine sont disponibles uniquement sur mobile. La qualité du streaming peut varier selon l’appareil utilisé. Conditions générales applicables.'
    },
    {
      question: 'Que comprend les offres  Cinédrome ?',
      answer: 'Nos offres  incluent :\n• Accès illimité à notre catalogue de contenus exclusifs et des avant-premières\n• Streaming avec ou sans publicité\n• Contenus exclusifs ajoutés mensuellement \n• Interface multilingues sous titrés  (français, anglais, langues locales) \n• Support client 24/7 \n• Visionnage hors ligne \n• Live expérience (événements artistiques et sportifs)'
    },
    {
      question: 'Comment puis-je payer ?',
      answer: 'Nous acceptons plusieurs moyens de paiement sécurisés :\n• Cartes bancaires \n• Virements bancaires \n• Paiement en espèces dans nos points de vente partenaires\n• Cartes prépayées Cinédrome (disponibles en kiosques).\n\nTous les paiements sont sécurisés et vos données sont protégées.'
    },
    {
      question: 'Puis-je regarder Cinédrome sur plusieurs appareils ?',
      answer: 'Oui, selon votre formule d\'abonnement : Vous pouvez installer l\'application sur le nombre d\'appareils prescrits (smartphones, tablettes, smart TV, ordinateur), mais le nombre de visionnages simultanés dépend de votre formule. '
    },
    {
      question: 'Comment résilier mon abonnement Cinédrome ?',
      answer: 'Vous pouvez résilier votre abonnement à tout moment et sans frais :\n• Depuis votre profil dans l\'application et/ou sur notre site internet\n• En contactant notre service client par email ou sms.\n\nLa résiliation prend effet à la fin de votre période de facturation en cours.'
    },
    {
      question: 'Ai-je besoin d\'une connexion Internet pour utiliser Cinédrome ?',
      answer: 'Une connexion Internet est nécessaire pour :\n• Naviguer dans le catalogue\n• Regarder en streaming direct\n• Télécharger vos contenus.\n\n**Pour le visionnage hors ligne, vous pouvez télécharger vos films et séries préférés pour les regarder sans connexion internet pendant 30 jours maximum.'
    },
    {
      question: 'Comment télécharger Cinedrome sur ma smart TV ?',
      answer: 'Pour installer Cinédrome sur votre smart TV :\n• Samsung/LG/Sony : Recherchez "Cinédrome" dans le store d\'applications de votre TV\n• Android TV : Téléchargez depuis le Google Play Store\n• Apple TV : Disponible sur l\'App Store\n• Amazon Fire TV : Cherchez dans l\'Amazon Appstore\n\n Pour les télévisions non compatibles, l\'utilisation du boitier Android TV, un Chromecast est recommandée.'
    },
    {
      question: 'Comment télécharger Cinédrome sur mes mobiles ?',
      answer: 'L\'application Cinédrome est disponible gratuitement sur :\n• Android : Google Play Store - recherchez "Cinédrome"\n• iOS : App Store - recherchez "Cinédrome"\n• Tablettes : Même processus que pour les smartphones.\n\nL\'application est optimisée pour tous les écrans et fonctionne sur Android 5.0+ et iOS 12.0+. Une fois téléchargée, connectez-vous avec vos identifiants pour accéder à votre catalogue.'
    }
  ];

}
