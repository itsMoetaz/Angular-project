import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailsProductComponent } from './core/mangeProduct/details-product/details-product.component';

const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'detail/:idt',component:DetailsProductComponent},
  {path:'first',component:FirstComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ListcategoriesComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
