import { Component } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  template: `
    <section align="center" class="hero-section">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Une boutique en ligne pour le Http Client en Angular</h3>
      <input placeholder="Rechercher dans ngDuka" type="text" />
    </section>
    <app-product-list
      sectionTitle="Electroniques"
      query="electronics"
      [queryLimitCount]="4"
    />

    <br />
    <app-product-list
      sectionTitle="Bijoux"
      query="jewelery"
      [queryLimitCount]="4"
    />

    <br />

    <app-product-list
      sectionTitle="Vêtement pour hommes"
      query="men's clothing"
      [queryLimitCount]="4"
    />

    <br />

    <app-product-list
      sectionTitle="Vêtement pour femmes "
      query="women's clothing"
      [queryLimitCount]="4"
    />
    <br />
    <br />
  `,
  styles: `
 .hero-section{
  background: linear-gradient(to right, #FF7F7F, #FFB6C1);
    padding:2rem;
    input{
  width:50vw;
      padding:0.5rem;
      font-size:1rem;
   }
 }
 `,
})
export default class HomeComponent {}
