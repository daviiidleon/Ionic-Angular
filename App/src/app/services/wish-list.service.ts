import { Injectable } from '@angular/core';
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private db = getFirestore();

  constructor(private authService: AuthService) {}

  async getUserId(): Promise<string> {
    const user = await this.authService.getCurrentUser();
    return user?.uid ?? '';
  }

  async addToWishlist(product: Product): Promise<void> {
    const uid = await this.getUserId();
    const productRef = doc(this.db, `users/${uid}/wishlist/${product._id}`);
    await setDoc(productRef, product);
  }

  async removeFromWishlist(productId: string): Promise<void> {
    const uid = await this.getUserId();
    const productRef = doc(this.db, `users/${uid}/wishlist/${productId}`);
    await deleteDoc(productRef);
  }

  async getWishlist(): Promise<Product[]> {
    const uid = await this.getUserId();
    const wishlistRef = collection(this.db, `users/${uid}/wishlist`);
    const snapshot = await getDocs(wishlistRef);
    return snapshot.docs.map(doc => doc.data() as Product);
  }

  async isInWishlist(productId: string): Promise<boolean> {
    const uid = await this.getUserId();
    const docRef = doc(this.db, `users/${uid}/wishlist/${productId}`);
    const snap = await getDoc(docRef);
    return snap.exists();
  }
}
