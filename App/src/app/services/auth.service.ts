// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';  // Importa el servicio de Firebase
import { Router } from '@angular/router';  // Para redirigir a otras páginasss

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,  // Accede a las funciones de autenticación de Firebase
    private router: Router  // Permite redirigir al usuario
  ) {}

  async login(email: string, password: string) {
    return await this.firebaseService.loginWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Inicio de sesión exitoso:', userCredential.user);
        // Aquí puedes redirigir a la página de inicio
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error en el login:', error);
        throw error;  // Lanza el error para manejarlo en el componente
      });
  }

  register(email: string, password: string) {
    return this.firebaseService.registerWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Usuario registrado:', userCredential.user);
        // Aquí puedes redirigir al usuario al login
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error en el registro:', error);
        throw error;  // Lanza el error para manejarlo en el componente
      });
  }

  // Método para cerrar sesión
  logout() {
    return this.firebaseService.getAuth().signOut()
      .then(() => {
        console.log('Cerrando sesión');
        this.router.navigate(['/login']);  // Redirige al login
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

  // Método para obtener el usuario autenticado
  getCurrentUser() {
    return this.firebaseService.getAuth().currentUser;
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}
