import { Component } from '@angular/core';
import { Products } from './models/products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  productsArray: Products[] = [
    {id: 1, name: 'Pasta', category: 'Pastas', price: 4.99},
    {id: 2, name: 'Lasanna', category: 'Carnes', price: 4.99 },
    {id: 3, name: 'Filet Merlusa', category: 'Pescado', price: 14.99}
  ];
  selectedProducts: Products = {id: 0, name: '', category: '', price: 0};

  openEdit(products: Products): void {
    this.selectedProducts = products;
  }

  addEdit(): void {
    if(this.selectedProducts.id === 0) {
      this.selectedProducts.id = this.productsArray.length + 1;
      this.productsArray.push(this.selectedProducts);
    }
    this.selectedProducts = {id: 0, name: '', category: '', price: 0};
  }

  delete(): void {
    if (confirm('Are you sure you want to delete it?')) {
      this.productsArray = this.productsArray.filter(x => x !== this.selectedProducts);
      this.selectedProducts = {id: 0, name: '', category: '', price: 0};
    }
  }




}




