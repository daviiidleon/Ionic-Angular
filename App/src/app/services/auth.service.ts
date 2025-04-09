import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Importamos Firestore

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  private auth = getAuth();
  private db = getFirestore(); // Firestore

  constructor() {
    // Escuchar cambios de sesión
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  // Obtener el usuario actual (sincrónico)
  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  // Observable del usuario (reactivo)
  getAuthUserObservable() {
    return this.user$;
  }

  // Iniciar sesión con correo y contraseña
  login(email: string, password: string): Promise<User> {
    return signInWithEmailAndPassword(this.auth, email, password).then((cred) => {
      this.userSubject.next(cred.user);
      return cred.user;
    });
  }

  // Registrar nuevo usuario
  register(registerData: any): Promise<User> {
    return createUserWithEmailAndPassword(this.auth, registerData.email, registerData.password).then(async (cred) => {
      // Guardamos los datos adicionales del usuario en Firestore
      const userRef = doc(this.db, 'users', cred.user.uid);
      await setDoc(userRef, {
        name: registerData.name,
        apellidos: registerData.apellidos,
        telefono: registerData.telefono,
        zipCode: registerData.zipCode
      });

      this.userSubject.next(cred.user);
      return cred.user;
    });
  }

  // Cerrar sesión
  logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.userSubject.next(null);
    });
  }
}



/*
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  private auth = getAuth();

  constructor() {
    // Escuchar cambios de sesión
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  // Obtener el usuario actual (sincrónico)
  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  // Observable del usuario (reactivo)
  getAuthUserObservable() {
    return this.user$;
  }

  // Iniciar sesión con correo y contraseña
  login(email: string, password: string): Promise<User> {
    return signInWithEmailAndPassword(this.auth, email, password).then((cred) => {
      this.userSubject.next(cred.user);
      return cred.user;
    });
  }

  // Registrar nuevo usuario
  register(email: string, password: string): Promise<User> {
    return createUserWithEmailAndPassword(this.auth, email, password).then((cred) => {
      this.userSubject.next(cred.user);
      return cred.user;
    });
  }

  // Cerrar sesión
  logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.userSubject.next(null);
    });
  }
}
*/



// src/app/services/auth.service.ts
/*
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
*/
