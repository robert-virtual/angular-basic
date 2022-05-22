import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CartComponent } from '../cart/cart.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ProductsComponent } from '../products/products.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
