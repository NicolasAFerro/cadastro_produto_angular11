import { Component, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product?: Product;

  @Input()
  sonCategories: Category[] = [];

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }

  teste() {
    // console.log(`nome: ${this.product.name}\n descrição: ${this.product.description}`);
    // console.log(`\n preço: ${this.product.price}\n promoção: ${this.product.promotion}`);
    // console.log(`\n new: ${this.product.newProduct}\n categoria: ${this.product.category.name}`);
    // console.log(`\n ${this.product.category.id} `);
  }
}
