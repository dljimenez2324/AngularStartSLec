import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // variables
  pageTitle: string = "Product Detail";
  product: IProduct | undefined;
  errorMessage: string = '';
  
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductsService) { }

  // this gets our products and finds the correct product based on its id
  getProduct(id:number):void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    })
  }
  
  // on back button click
  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if(id) {
      this.getProduct(id);
    }
    
  }
}

//// 
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { IProduct } from './product';
// import { ProductsService } from './products.service';

// @Component({
//   selector: 'pm-product-detail',
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit {

//   // variables
//   pageTitle: string = "Product Detail";
//   product: IProduct | undefined;
//   errorMessage: string = '';
  
//   constructor(private route: ActivatedRoute, 
//               private router: Router,
//               private productService: ProductsService) { }

//   // on back button click
//   onBack(): void {
//     this.router.navigate(['/products']);
//   }

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.pageTitle += `: ${id}`;
    
//     // Get products from the service instead of hardcoding them
//     this.productService.getProducts().subscribe({
//       next: products => {
//         // Find the product with the matching id
//         this.product = products.find(product => product.productId === id);
//       },
//       error: err => this.errorMessage = err
//     });
//   }
// }

//// notice this is with our products hard coded
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { IProduct } from './product';

// @Component({
//   selector: 'pm-product-detail',
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit {

//   // variables
//   pageTitle: string = "Product Detail";
//   product: IProduct | undefined;
//   products: IProduct[] = [
//     {
//       "productId": 1,
//       "productName": "Leaf Rake",
//       "productCode": "GDN-0011",
//       "releaseDate": "March 19, 2021",
//       "description": "Leaf rake with 48-inch wooden handle.",
//       "price": 19.95,
//       "starRating": 3.2,
//       "imageUrl": "assets/images/leaf_rake.png"
//     },
//     {
//       "productId": 2,
//       "productName": "Garden Cart",
//       "productCode": "GDN-0023",
//       "releaseDate": "March 18, 2021",
//       "description": "15 gallon capacity rolling garden cart",
//       "price": 32.99,
//       "starRating": 4.2,
//       "imageUrl": "assets/images/garden_cart.png"
//     },
//     {
//       "productId": 5,
//       "productName": "Hammer",
//       "productCode": "TBX-0048",
//       "releaseDate": "May 21, 2021",
//       "description": "Curved claw steel hammer",
//       "price": 8.9,
//       "starRating": 4.8,
//       "imageUrl": "assets/images/hammer.png"
//     },
//     {
//       "productId": 8,
//       "productName": "Saw",
//       "productCode": "TBX-0022",
//       "releaseDate": "May 15, 2021",
//       "description": "15-inch steel blade hand saw",
//       "price": 11.55,
//       "starRating": 3.7,
//       "imageUrl": "assets/images/saw.png"
//     },
//     {
//       "productId": 10,
//       "productName": "Video Game Controller",
//       "productCode": "GMG-0042",
//       "releaseDate": "October 15, 2020",
//       "description": "Standard two-button video game controller",
//       "price": 35.95,
//       "starRating": 4.6,
//       "imageUrl": "assets/images/xbox-controller.png"
//     }
//   ];

//   constructor(private route: ActivatedRoute, private router: Router) { }

//   // on back button click
//   onBack(): void {
//     this.router.navigate(['/products']);
//   }

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.pageTitle += `: ${id}`;
    
//     // Find the product with the matching id
//     this.product = this.products.find(p => p.productId === id);
//   }
// }


//// kept showing the first product and not the others id
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { IProduct } from './product';
// import { ProductsService } from './products.service';

// @Component({
//   selector: 'pm-product-detail',
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit {

//   // variables
//   pageTitle: string = "Product Detail";
//   product: IProduct | undefined;

//   constructor(private route:ActivatedRoute, private router:Router, private ProductsService: ProductsService) { }

//   // get our products
//   getProduct(id:number): void {
//     this.ProductsService.getProducts(id).subscribe({
//       next: product => this.product = product,
//       error: err => this.errorMessage = err
//     })
//   }

//   // on back button click
//   onBack(): void {
//     this.router.navigate(['/products'])
//   }

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.pageTitle += `:${id}`;
    
//   }

// }
