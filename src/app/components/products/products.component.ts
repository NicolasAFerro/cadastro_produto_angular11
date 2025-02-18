import { Component } from '@angular/core';

import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  //variaveis
  product: Product = {} as Product;
  //se eud deixar assim, eu consigo condicionar oq quero ou não mostrar o componente.
  //ai todo o templante/layout do component filho desapareça
  //product ?: Product;
  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    //this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    //os dois dão certo, colocar no init e colocar no constructor
    //this.categories = this.categoryService.getCategories();
    //agora ele ^^ não devolve um array, e sim um observable que tem um array
    //então faz vv
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      //faço a chamada, o Observable é recebido por um subscribe;
      //o next avisa que chegou (variavel data) atribuo ao array de categorias
    });

    //this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }

  saveProduct() {
    this.productService.save(this.product).subscribe({
      next: (data) => {
        this.products.push(data);
      },
    });
    this.product = {} as Product;
    console.log('salvei o produto' + this.products.length);
  }
}
// O ngOnInit() faz parte do ciclo de vida do Angular.
//  Ele é chamado depois que o Angular terminou de criar o componente e inicializar as
//  suas propriedades.
//   Aqui, o componente já está completamente configurado,
//   o que é ideal para fazer chamadas a serviços,
//    especialmente quando essas chamadas são assíncronas (como uma requisição HTTP).
// Você está garantindo que o Angular já tenha terminado toda a configuração antes
// de buscar as categorias.
//  Isso é especialmente importante se getCategories()
//   fizer uma chamada assíncrona (como um Observable ou Promise),
//    pois o Angular estará pronto para lidar com a atualização do
//     template quando os dados chegarem.
