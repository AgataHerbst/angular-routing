import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1>Кулинарная страничка</h1>
  <nav>
  <a routerLink="">Главная</a>
  <a routerLink="/about">О нас</a>
  <a routerLink="/news">Новости</a>
  <a routerLink="/price">Цена</a>
  </nav>
  <router-outlet></router-outlet>
  </div>`,
  styles: [`
  h1{color:#2F4F4F;}
  a{margin:7px;
    font-size: 25px;
    color:#D2691E;
  }`
  ]
})
export class AppComponent {
  title = 'routing';
}
