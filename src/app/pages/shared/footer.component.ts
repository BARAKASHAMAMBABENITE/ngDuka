import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class=" footer-container max-width">
        <div class="left-container">
          <div>
            <p><b>PRODUITS</b></p>
            <a routerLink="/products/electronics">Electroniques</a>
            <a routerLink="/products/jewelerys">Bijoux</a>
            <a routerLink="/products/men's clothing">Vêtement pour homme</a>
            <a routerLink="/products/women's clothing">Vêtement pour femme</a>
          </div>
          <div>
            <p><b>LIENS</b></p>
            <a href="https://youtu.be/hiTGJtfPIdy" target="blank"
              >Tutoriel Youtube</a
            >
            <a href="https://github.com/DrcMind-Youtube/ngDuka" target="blank"
              >Code Github</a
            >
            <a href="https://drcmind-malakisi.teachable.com/" target="blank"
              >Malakisi</a
            >
          </div>
        </div>
        <p>
          <b>ngDuka 0 {{ date.getFullYear() }}</b
          ><br />
          Développé par Baraka Shamamba Bénite , propulsé par Malakisi
        </p>
      </div>
    </footer>
  `,
  styles: `
  footer{
    background: #e4e4e4;
  }
  .footer-container{
    display:flex;
    justify-content:space-between;
    align-items:end;
    padding:2rem;
    flex-wrap:wrap;

    .left-container{
      display:flex;
      flex-wrap:wrap;
      gap:3rem;
      
      a {
        display:block;
        color: inherit;
        margin:0.5rem 0; 
        color:black;
        text-decoration: none;
      }
    }

  }
  `,
})
export class FooterComponent {
  date = new Date();
}
