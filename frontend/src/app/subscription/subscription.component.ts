import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit{
  
  subscriptionForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {};

  ngOnInit(): void {

    this.subscriptionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordsMatchValidator });

   
    throw new Error('Method not implemented.');
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {

    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password == confirmPassword ?  null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    if (this.subscriptionForm.invalid) {
      this.subscriptionForm.markAllAsTouched();
      return;
    }

    console.log('Formulaire validé :', this.subscriptionForm.value);
    // Ici tu peux appeler ton service d'inscription vers l'API backend
  }

  get f() {
    return this.subscriptionForm.controls;
  }

}
