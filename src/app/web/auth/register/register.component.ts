import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.registrationForm = this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      fullName: [null],
      phoneNumber: [null],
      email: [null],
      password: [null],
      confirmPassword: [null],
      selectedPlan: ['play'],
      termsAccepted: [false, [Validators.requiredTrue]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Custom validator pour le numéro de téléphone
  private phoneValidator(control: AbstractControl): {[key: string]: any} | null {
    const phoneRegex = /^\(\+\d{1,3}\)\s?\d{10}$/;
    if (control.value && !phoneRegex.test(control.value)) {
      return { 'phoneInvalid': true };
    }
    return null;
  }

  // Validator pour vérifier que les mots de passe correspondent
  private passwordMatchValidator(form: AbstractControl): {[key: string]: any} | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (!password || !confirmPassword) {
      return null;
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ 'passwordMismatch': true });
      return { 'passwordMismatch': true };
    } else {
      // Remove the error if passwords match
      if (confirmPassword.errors) {
        delete confirmPassword.errors['passwordMismatch'];
        if (Object.keys(confirmPassword.errors).length === 0) {
          confirmPassword.setErrors(null);
        }
      }
    }
    
    return null;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log('Données du formulaire:', formData);
      
      // Ici vous pouvez appeler votre service d'inscription
      this.registerUser(formData);
    } else {
      console.log('Formulaire invalide');
      this.markFormGroupTouched();
    }
  }

  private registerUser(userData: any): void {
    // Simulation d'un appel API
    console.log('Inscription en cours...', userData);
    
    // Exemple d'appel de service
    // this.authService.register(userData).subscribe({
    //   next: (response) => {
    //     console.log('Inscription réussie', response);
    //     // Rediriger vers la page de connexion ou dashboard
    //   },
    //   error: (error) => {
    //     console.error('Erreur lors de l\'inscription', error);
    //   }
    // });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.registrationForm.controls).forEach(key => {
      const control = this.registrationForm.get(key);
      control?.markAsTouched();
    });
  }

  // Getters pour faciliter l'accès aux contrôles dans le template
  get fullName() { return this.registrationForm.get('fullName'); }
  get phoneNumber() { return this.registrationForm.get('phoneNumber'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }
  get selectedPlan() { return this.registrationForm.get('selectedPlan'); }
  get termsAccepted() { return this.registrationForm.get('termsAccepted'); }

  // Méthodes pour afficher les erreurs
  getErrorMessage(controlName: string): string {
    const control = this.registrationForm.get(controlName);
    
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return 'Ce champ est obligatoire';
      }
      if (control.errors['email']) {
        return 'Format d\'email invalide';
      }
      if (control.errors['minlength']) {
        return `Minimum ${control.errors['minlength'].requiredLength} caractères`;
      }
      if (control.errors['maxlength']) {
        return `Maximum ${control.errors['maxlength'].requiredLength} caractères`;
      }
      if (control.errors['phoneInvalid']) {
        return 'Format de téléphone invalide';
      }
      if (control.errors['passwordMismatch']) {
        return 'Les mots de passe ne correspondent pas';
      }
    }
    
    return '';
  }

  hasError(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return !!(control?.errors && control.touched);
  }

  continueRegistration() {
    this.router.navigateByUrl(`registration/success`)
  }
}