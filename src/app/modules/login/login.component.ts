import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { AutenticacionService } from '../../core/services/autenticacion/atenticacion.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(
    private authService: AutenticacionService,
    private router: Router
  ) {}

  onLogin() {
    if (this.authService.login(this.loginData.email, this.loginData.password)) {
      this.errorMessage = '';
      // Redirigir a una página con header + sidebar después del login
      this.router.navigate(['/matricula']); // o '/matricula' o donde quieras
    } else {
      this.errorMessage = 'Credenciales inválidas. Por favor, intenta de nuevo.';
    }
  }

  navigateToRegister() {
    this.router.navigate(['/registro']);
  }
}
