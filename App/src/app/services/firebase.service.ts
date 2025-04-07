// src/app/services/firebase.service.ts

import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private auth;

  constructor() {
    // Inicializar Firebase
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
  }

  // Devuelve el objeto de autenticación de Firebase
  getAuth() {
    return this.auth;
  }

  // Método para registrar usuario con email y contraseña
  registerWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Método para iniciar sesión con email y contraseña
  loginWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Método para cerrar sesión
  signOut() {
    return signOut(this.auth);
  }
}
