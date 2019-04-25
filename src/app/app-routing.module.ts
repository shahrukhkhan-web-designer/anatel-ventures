import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'contact-us', component:ContactComponent},
  {path:'services', component: ServicesComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**',  redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
