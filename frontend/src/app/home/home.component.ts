import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menuItems = [
    {label: 'Réunions', url: '#'},
    {label: 'Mariage', url: '#'},
    {label: 'Retraites', url: '#'},
    {label: 'Baptèmes', url: '#'}
  ];


}
