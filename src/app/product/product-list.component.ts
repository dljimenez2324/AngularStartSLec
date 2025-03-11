import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})

export class ProductListComponent implements OnInit {


  pageTitle: string = 'Product List';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  // listFilter: string = 'cart';

  // private variable for filter
  private _listFilter: string = '';
  // getter for filter
  get listFilter(): string {
    return this._listFilter;
  }
  // setter for filter
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter, we have this value: ', value);
    // lets filter our products with out new filter method performFilter seen down below
    this.filteredProducts = this.performFilter(value);
  }

  // lets make an empty array of products add in data to filter our products
  filteredProducts: IProduct[] = [];

  // lets make an array of products
  products: IProduct[] = [
    
  ];

  // lets make a constructor to inject our products service
  constructor(private productService: ProductsService) {}

  // lets make a method for filtering our products
  performFilter(filterBy:string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("This is from our ng OnInit");
    // this below is our products array by getting it from our products service
    this.products = this.productService.getProducts();
    this.listFilter = 'cart';
    
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  
}
