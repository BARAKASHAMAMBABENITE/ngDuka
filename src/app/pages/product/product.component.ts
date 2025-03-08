import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../core/model/product.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from '../../core/service/api.service';
import { Title } from '@angular/platform-browser';
import { ProductListComponent } from '../products/product-list/product-list.component';

@Component({
  selector: 'app-product',
  imports: [ProductListComponent],
  templateUrl: './product.component.html',
  styles: `
  .product-container{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    margin:2rem auto !important;

    img{
      width:50%;
    }
    .product-info{
      width:40%
    }
  }
  button:disabled{
    background:grey;
    opacity:0.5
  }

  // .qantity-container{
  //   display:flex;
  //   align-items:center;
  //   gap:0.5rem
  //  }
  `,
})
export default class ProductComponent implements OnInit, OnDestroy {
  product?: Product;
  loading = signal(true);
  route = inject(ActivatedRoute);
  api = inject(ApiService);
  title = inject(Title);
  routeSub?: Subscription;
  productQty = signal(1);
  ngOnInit(): void {
    this.routeSub = this.route.params
      .pipe(switchMap((params) => this.api.getProduct(params['id'])))
      .subscribe((product) => {
        this.product = product;
        this.title.setTitle(`${product.title}  - ngDuka`);
        this.loading.set(false);
      });
  }
  qtyHandling(operation: string) {
    if (operation === 'add') {
      this.productQty.update((value) => value + 1);
    } else {
      this.productQty.update((value) => value - 1);
    }
  }
  addTocart(product: Product) {
    // Add product to cart ...
    // this.api.addNewProduct(product)
    this.api.cartProductCount.update((value) => value + 1);
    this.productQty.set(1);
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe;
  }
}
