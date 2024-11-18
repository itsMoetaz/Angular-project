import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstLettreUpperPipe } from './first-lettre-upper.pipe';
import { TestDirective } from './test.directive';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HeaderappComponent } from './shared/headerapp/headerapp.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailsProductComponent } from './core/mangeProduct/details-product/details-product.component';
import { UserModule } from './core/user/user.module';
import { AddProductComponent } from './core/mangeProduct/add-product/add-product.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { ErrorComponent } from './shared/error/error.component';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    FirstLettreUpperPipe,
    TestDirective,
    ListcategoriesComponent,
    NotfoundComponent,
    HeaderappComponent,
    FooterComponent,
    LoginComponent,
    DetailsProductComponent,
    AddProductComponent,
    ReactiveformComponent,
    MobileComponent,
    TvComponent,
    ShowOneProductComponent,
    ErrorComponent,
    M1Component,
    M2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
