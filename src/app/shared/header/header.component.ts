import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacionService } from '../../core/services/autenticacion/atenticacion.service';
import { Usuario } from '../../core/models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: Usuario | null = null;
  isAuthenticated: boolean = false;
  private userSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private authService: AutenticacionService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.usuarioactual$.subscribe(usuario => {
      this.currentUser = usuario;
      this.isAuthenticated = usuario !== null;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.authService.logout();
  }
}
