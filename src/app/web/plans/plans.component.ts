// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-plans',
//   templateUrl: './plans.component.html',
//   styleUrl: './plans.component.scss'
// })
// export class PlansComponent {
//   plans = [
//     {
//       name: 'PAY',
//       type: 'HD',
//       price: '1.500',
//       period: 'FCFA/mois',
//       features: [
//         'Accès à toute la bibliothèque',
//         'Qualité vidéo SD',
//         '1 appareil simultané',
//         'Annulation facile'
//       ],
//       buttonText: 'Commencer',
//       featured: false
//     },
//     {
//       name: 'PREMIUM',
//       type: 'Full HD',
//       price: '2.500',
//       period: 'FCFA/mois',
//       features: [
//         'Tout de la formule Basique',
//         'Qualité vidéo HD',
//         '2 appareils simultanés',
//         'Téléchargement offline',
//         'Sans publicité'
//       ],
//       buttonText: 'Commencer',
//       featured: true
//     },
//     {
//       name: 'PREMIUM+',
//       type: '4K',
//       price: '3.500',
//       period: 'FCFA/mois',
//       features: [
//         'Tout de la formule Standard',
//         'Qualité vidéo 4K + HDR',
//         '4 appareils simultanés',
//         'Audio spatial',
//         'Contenu exclusif'
//       ],
//       buttonText: 'Commencer',
//       featured: false
//     }
//   ];
// }




import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Plan {
  name: string;
  type: string;
  price: string;
  support: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
  mobile?: boolean;
  desktop?: boolean;
  tablet?: boolean;
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  plans: Plan[] = [
    {
      name: 'PLAY',
      type: 'HD',
      price: '1.500',
      support: 'Supports : Mobiles',
      mobile: true,
      desktop: false,
      tablet: false,
      features: [
        '01 écran',
        'Suivez vos séries, films, téléfilms, podcasts, téléréalités, animations et bien d\'autres contenus',
        'Diffusez en HD',
        'Téléchargez et regardez en hors ligne',
        'Avec publicité'
      ],
      buttonText: 'COMMENCER'
    },
    {
      name: 'PREMIUM',
      type: 'Full HD',
      price: '2.500',
      support: 'Supports : Tous les appareils ou mobiles',
      mobile: true,
      desktop: true,
      tablet: true,
      features: [
        '02 écrans simultanés',
        'Suivez vos séries, films, téléfilms, podcasts, téléréalités, documentaires, animations et bien d\'autres contenus',
        'Making off des séries et films cultes',
        'Suivez les évènements en live',
        'Diffusez en Full HD ou choisissez votre qualité',
        'Téléchargez et regardez en hors ligne'
      ],
      buttonText: 'COMMENCER'
    },
    {
      name: 'PREMIUM +',
      type: '4K',
      price: '3.500',
      support: 'Supports : Tous les appareils ou mobiles',
      mobile: true,
      desktop: true,
      tablet: true,
      features: [
        '02 écrans simultanés',
        'Suivez vos séries, films, téléfilms, podcasts, téléréalités, documentaires, animations et bien d\'autres contenus',
        'Making off des séries et films cultes',
        'Suivez les évènements en live',
        'Diffusez les matchs des championnats locaux et internationaux',
        'Diffusez en Ultra HD / 4K ou choisissez votre qualité',
        'Téléchargez et regardez en hors ligne'
      ],
      buttonText: 'COMMENCER'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  subscribe(plan:any) {
    this.router.navigateByUrl(`/register`)

  }

}