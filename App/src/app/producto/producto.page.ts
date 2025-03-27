import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from '../services/products.service';
import { CurrencyPipe } from "@angular/common";
import { FormsModule } from "@angular/forms"; // Este es el import correcto
import { IonicModule } from '@ionic/angular'; // Importar el IonicModule

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Aquí importamos el módulo necesario de Ionic
    FormsModule, // Asegúrate de importar FormsModule si usas ngModel
    CurrencyPipe
  ]
})
export class ProductoPage implements OnInit {

  productId: string | null = null;
  product: Product | null = null;
  isLoading: boolean = true;
  quantity: number = 1;
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  selectedSize: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    // Obtener el id del producto desde la URL
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProductDetail(this.productId);
    }
  }

  loadProductDetail(id: string) {
    this.isLoading = true;
    this.productsService.getProductById(id).then(product => {
      this.product = product;
      this.isLoading = false;
    }).catch(error => {
      console.error('Error al cargar el producto:', error);
      this.isLoading = false;
    });
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQuantity() {
    if (this.quantity < 100) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.selectedSize) {
      // Aquí agregarías el producto al carrito con la cantidad y talla seleccionada
      console.log(`Producto añadido al carrito: ${this.product?.name}, Talla: ${this.selectedSize}, Cantidad: ${this.quantity}`);
    }
  }
}
