import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FirstLettreUpperPipe } from './first-lettre-upper.pipe';
import { TestDirective } from './test.directive';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HeaderappComponent } from './shared/headerapp/headerapp.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailsProductComponent } from './core/mangeProduct/details-product/details-product.component';
import { UserModule } from './core/user/user.module';

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
    DetailsProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
