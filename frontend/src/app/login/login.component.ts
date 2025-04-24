import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Ici tu feras un appel à ton service d'authentification
      console.log('Tentative de connexion pour :', email);

      // Simulation d'un succès de login
      // À remplacer par appel API (et gestion des erreurs)
      setTimeout(() => {
        console.log('Connexion réussie ✅');
        this.router.navigate(['/home']); // ou `/home`, `/profil`, etc.
      }, 1000);
    }
  }


}
