import { Injectable } from "@angular/core";
import { BehaviorSubject, timestamp } from "rxjs";
import {Router} from "@angular/router";
import { Usuario } from  "../../models/usuario.model";

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
    private usuarioactualSubject = new BehaviorSubject<Usuario | null>(null)
    public usuarioactual$ = this.usuarioactualSubject.asObservable()

    constructor(private router: Router){
        const usuarioGuardado = localStorage.getItem('usuario');
        if (usuarioGuardado) {
            this.usuarioactualSubject.next(JSON.parse(usuarioGuardado));
        }
    }

    login(email: string, password: string): boolean {
        // Simulación de login (reemplazar con API real)
        if (email && password) {
            const usuario: Usuario = {
                id: 1,
                nombre: 'Juan',
                apellido: 'Pérez',
                email: email,
                password: "",
                fechaNacimiento: new Date(),
                telefono: "",
                direccion: "",
                ciudad: "",
                pais: "",
                fechaRegistro: new Date(),
                activo: false
            };
            
            this.usuarioactualSubject.next(usuario);
            localStorage.setItem('usuario', JSON.stringify(usuario));
            return true;
        }
        return false;
    }

    register(datosUsuario: any): boolean {
        // Simulación de registro
        const usuario: Usuario = {
            id: Date.now(),
            nombre: datosUsuario.nombre,
            apellido: datosUsuario.apellido,
            email: datosUsuario.email,
            password: "",
            fechaNacimiento: new Date(),
            telefono: "",
            direccion: "",
            ciudad: "",
            pais: "",
            fechaRegistro: new Date(),
            activo: false
        };
        
        this.usuarioactualSubject.next(usuario);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        return true;
    }

    logout(): void {
        this.usuarioactualSubject.next(null);
        localStorage.removeItem('usuario');
        this.router.navigate(['/home']);
    }

    isAuthenticated(): boolean {
        return this.usuarioactualSubject.value !== null;
    }
    getUsuarioActual(): Usuario | null {
        return this.usuarioactualSubject.value;
    }

}