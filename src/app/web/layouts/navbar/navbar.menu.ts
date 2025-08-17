export interface PublicMenu {
  id: string;
  url?: string;
  label: string;
  icon?: string;
  roles?: string[];
  isActive?: boolean;
  isVisible?: boolean;
  hasDropdown?: boolean;
  children?: PublicSubMenu[];
  badge?: {
    text: string;
    type: 'success' | 'primary' | 'warning' | 'danger' | 'info';
  };
}

export interface PublicSubMenu {
  id: string;
  url: string;
  label: string;
  icon?: string;
  roles?: string[];
  isActive?: boolean;
  isVisible?: boolean;
  children?: PublicSubMenu[];
  badge?: {
    text: string;
    type: 'success' | 'primary' | 'warning' | 'danger' | 'info';
  };
}

export const PUBLIC_MENU_ITEMS: PublicMenu[] = [
  // {
  //   id: 'home',
  //   label: 'Accueil',
  //   // icon: 'bi bi-house',
  //   url: '/',
  //   isVisible: true
  // },
  // {
  //   id: 'series',
  //   label: 'Séries',
  //   url: '/series',
  //   isVisible: true
  // },
  // {
  //   id: 'films',
  //   label: 'Films',
  //   url: '/films',
  //   isVisible: true
  // },
  // {
  //   id: 'live',
  //   label: 'Live',
  //   url: '/live',
  //   isVisible: true
  // },
  // {
  //   id: 'podcasts',
  //   label: 'Podcasts',
  //   url: '/podcasts',
  //   isVisible: true
  // }

  // // Exemple de menu avec sous-menus
  // {
  //   id: 'exampleId',
  //   label: 'Exemple',
  //   icon: 'example-icon',
  //   hasDropdown: true,
  //   isVisible: true,
  //   roles: ['ROLS_1', 'ROLES_2', '...'],
  //   children: [
  //     {
  //       id: 'blog',
  //       label: 'Blog',
  //       icon: 'ri-article-line',
  //       url: '/blog',
  //       isVisible: true
  //     },
  //     {
  //       id: 'support',
  //       label: 'Support',
  //       icon: 'ri-customer-service-2-line',
  //       url: '#',
  //       isVisible: true,
  //       children: [
  //         {
  //           id: 'support-tickets',
  //           label: 'Tickets',
  //           icon: 'ri-ticket-line',
  //           url: '/support/tickets',
  //           isVisible: true
  //         }
  //       ]
  //     }
  //   ]
  // },
];