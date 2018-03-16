import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';
import { HomeComponent } from './home/home.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UserViewComponent } from './user-view/user-view.component';
import { FormsModule } from "@angular/forms";
import { TokenInyectorService } from './services/token-inyector.service';
import { UserFormLoginComponent } from './user-form-login/user-form-login.component';
import { AuthService } from './services/auth.service';
import { UserInformationComponent } from './user-information/user-information.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserFormEditComponent,
    HomeComponent,
    UserFormCreateComponent,
    UserViewComponent,
    UserFormLoginComponent,
    UserInformationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInyectorService,
    multi: true
  }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
