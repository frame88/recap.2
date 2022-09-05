import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedButtonComponent,
    CatalogComponent,
    ContactsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'catalog', component: CatalogComponent},
      { path: 'contacts', component: ContactsComponent},
      { path: '**', redirectTo: 'catalog' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
