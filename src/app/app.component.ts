import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule
  ]
})
export class AppComponent {
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  goToContact() {
    this.router.navigate(['contact']);  //if path = contact/us we can pass it like ['contact', 'us']
  }

}
