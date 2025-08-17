import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PUBLIC_MENU_ITEMS, PublicMenu, PublicSubMenu } from './navbar.menu';
import { AppConfig } from '../../../config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  currentUser: any = null;
  menus: PublicMenu[] = [];
  dropdownStates: { [key: string]: boolean } = {};
  appLogo = AppConfig.appLogoWhite;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeMenus();
    this.initializeDropdownStates();
  }

  /**
   * Initialise les menus selon les permissions utilisateur
   */
  private initializeMenus(): void {
    this.menus = PUBLIC_MENU_ITEMS.filter(menu => this.hasPermission(menu)).map(menu => ({
      ...menu,
      children: menu.children?.filter(child => this.hasPermission(child)).map(child => ({
        ...child,
        children: child.children?.filter(subChild => this.hasPermission(subChild))
      }))
    }));
  }

  /**
   * Initialise les états des dropdowns
   */
  private initializeDropdownStates(): void {
    this.menus.forEach(menu => {
      if (menu.hasDropdown) {
        this.dropdownStates[menu.id] = false;
        
        menu.children?.forEach(child => {
          if (child.children && child.children.length > 0) {
            this.dropdownStates[child.id] = false;
          }
        });
      }
    });
  }

  /**
   * Vérifie si l'utilisateur a les permissions pour voir un menu
   */
  private hasPermission(menuItem: PublicMenu | PublicSubMenu): boolean {
    if (!menuItem.isVisible) return false;
    if (!menuItem.roles || menuItem.roles.length === 0) return true;
    
    // Si pas d'utilisateur connecté, afficher seulement les menus sans rôles requis
    if (!this.currentUser) {
      return !menuItem.roles || menuItem.roles.length === 0;
    }
    
    return menuItem.roles.includes(this.currentUser?.role);
  }

  /**
   * Navigation avec fermeture des dropdowns
   */
  navigateTo(url: string): void {
    if (url && url !== '#') {
      this.router.navigateByUrl(url);
      this.closeAllDropdowns();
      this.isMenuOpen = false; // Fermer le menu mobile après navigation
    }
  }

  /**
   * Toggle menu mobile
   */
  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.closeAllDropdowns();
    }
  }

  /**
   * Ferme tous les dropdowns
   */
  closeAllDropdowns(): void {
    Object.keys(this.dropdownStates).forEach(key => {
      this.dropdownStates[key] = false;
    });
  }

  /**
   * Obtenir la classe CSS pour les badges
   */
  getBadgeClass(type: string): string {
    const classes: { [key: string]: string } = {
      success: 'bg-success',
      primary: 'bg-primary',
      warning: 'bg-warning',
      danger: 'bg-danger',
      info: 'bg-info'
    };
    return classes[type] || 'bg-secondary';
  }

  /**
   * Gestion hover pour desktop
   */
  handleDropdownHover(menuId: string, isHover: boolean): void {
    if (window.innerWidth > 991) {
      if (isHover) {
        this.dropdownStates[menuId] = true;
      } else {
        setTimeout(() => {
          if (!this.isElementBeingHovered(menuId)) {
            this.dropdownStates[menuId] = false;
          }
        }, 100);
      }
    }
  }

  /**
   * Vérifie si un élément est survolé
   */
  private isElementBeingHovered(menuId: string): boolean {
    const element = document.querySelector(`[data-dropdown="${menuId}"]`);
    return element?.matches(':hover') || false;
  }

  /**
   * Toggle dropdown spécifique
   */
  toggleDropdown(menuId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Sur mobile, gérer le toggle
    if (window.innerWidth <= 991) {
      // Fermer tous les autres dropdowns du même niveau
      Object.keys(this.dropdownStates).forEach(key => {
        if (key !== menuId && !this.isChildOf(menuId, key)) {
          this.dropdownStates[key] = false;
        }
      });

      // Toggle le dropdown demandé
      this.dropdownStates[menuId] = !this.dropdownStates[menuId];
    }
  }

  /**
   * Vérifie si un menu est enfant d'un autre
   */
  private isChildOf(parentId: string, childId: string): boolean {
    const parentMenu = this.menus.find(m => m.id === parentId);
    if (!parentMenu || !parentMenu.children) return false;
    
    return parentMenu.children.some(child => child.id === childId);
  }

  /**
   * Vérifie si un parent est actif
   */
  isParentActive(menu: PublicMenu): boolean {
    if (!menu.children) return false;
    
    return menu.children.some(child => {
      if (child.url && this.router.url.startsWith(child.url)) {
        return true;
      }
      if (child.children) {
        return child.children.some(subChild => 
          subChild.url && this.router.url.startsWith(subChild.url)
        );
      }
      return false;
    });
  }
  
  goToLogin(): void {
    this.router.navigateByUrl('login');
    this.isMenuOpen = false; // Fermer le menu mobile
  }
  
  goToGetStarted(): void { // Corrigé le nom de la méthode
    this.router.navigateByUrl('plans');
    this.isMenuOpen = false; // Fermer le menu mobile
  }
}