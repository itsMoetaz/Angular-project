import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailsProductComponent } from './core/mangeProduct/details-product/details-product.component';
import { AddProductComponent } from './core/mangeProduct/add-product/add-product.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DetailsCategoriesComponent } from './details-categories/details-categories.component';
import { RemoveproductComponent } from './core/mangeProduct/removeproduct/removeproduct.component';
import { UpdateProductComponent } from './core/mangeProduct/update-product/update-product.component';

const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'add',component:AddProductComponent},
 {path:'react',component:ReactiveformComponent},
 {path:'update/:id',component:UpdateProductComponent},
 {path:'remove/:id',component:RemoveproductComponent},
 {path:'details/:id',component:DetailsCategoriesComponent},
 {path:'products',component:ListcategoriesComponent,
  children:[
  {path:'detail/:idttwin2',component:DetailsProductComponent},
   {path:'products',component:ListcategoriesComponent},
 ]},
 {path:'lazy',loadChildren:
  ()=>import('./core/user/user.module')
  .then((m)=>m.UserModule)},
 
 {path:'first',component:FirstComponent},
  {path:'login',component:LoginComponent},
 
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
