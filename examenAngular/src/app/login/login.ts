import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) {}

  username = '';
  password = '';
  
  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      console.log('Iniciaste sesión');
      this.router.navigate(['/pokemones']);
    } else {
      console.log('No manches, ni dandote la indicacion lo logras');
    }
    
  }
}
