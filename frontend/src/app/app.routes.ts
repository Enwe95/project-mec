// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './finances/finances.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

/*export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'finances', component: FinancesComponent },
  // ... autres routes
];*/

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 // { path: '**', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},

  { path: 'login', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard], // ⛔️ Bloque si déjà connecté
  },
  { path: 'finances', component: FinancesComponent },
  { path: 'subscription', component: SubscriptionComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
