/*
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private auth;
  private firestore;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
    this.firestore = getFirestore(app);
  }

  getAuth() {
    return this.auth;
  }

  registerWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }

  async saveUserData(uid: string, data: any) {
    const userRef = doc(this.firestore, 'users', uid);
    return await setDoc(userRef, data, { merge: true });
  }

  async getUserData(uid: string) {
    const userRef = doc(this.firestore, 'users', uid);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  // Wishlist Methods

  // Agregar producto a la wishlist
  async addToWishlist(userId: string, productId: string) {
    const wishlistRef = collection(this.firestore, 'users', userId, 'wishlist');
    const q = query(wishlistRef, where("productId", "==", productId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      await addDoc(wishlistRef, { productId });
      console.log('Producto agregado a la wishlist');
    } else {
      console.log('Producto ya está en la wishlist');
    }
  }

  // Obtener los productos de la wishlist
  async getWishlist(userId: string) {
    const wishlistRef = collection(this.firestore, 'users', userId, 'wishlist');
    const querySnapshot = await getDocs(wishlistRef);
    const wishlist: any[] = [];

    querySnapshot.forEach(docSnapshot => {
      wishlist.push(docSnapshot.data());
    });

    return wishlist;
  }

  // Eliminar producto de la wishlist
  async removeFromWishlist(userId: string, productId: string) {
    const wishlistRef = collection(this.firestore, 'users', userId, 'wishlist');
    const q = query(wishlistRef, where("productId", "==", productId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docSnapshot) => {
      await deleteDoc(doc(this.firestore, 'users', userId, 'wishlist', docSnapshot.id));
      console.log('Producto eliminado de la wishlist');
    });
  }
}
*/


import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private auth;
  private firestore;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
    this.firestore = getFirestore(app);
  }

  getAuth() {
    return this.auth;
  }

  registerWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }

  async saveUserData(uid: string, data: any) {
    const userRef = doc(this.firestore, 'users', uid);
    return await setDoc(userRef, data, { merge: true });
  }

  async getUserData(uid: string) {
    const userRef = doc(this.firestore, 'users', uid);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  }
}

/*
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
*/
