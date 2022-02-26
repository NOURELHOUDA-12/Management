import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AjouterOrganisationComponent } from './ajouter-organisation/ajouter-organisation.component';
import { AddEntrepriseModalComponent } from './add-entreprise-modal/add-entreprise-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EntreprisePopupComponent } from './entreprise-popup/entreprise-popup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrganisationComponent } from './organisation/organisation.component';
import { DetailComponent } from './detail/detail.component';
import { MenuMycpmComponent } from './menu-mycpm/menu-mycpm.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AjouterOrganisationComponent,
    AddEntrepriseModalComponent,
    EntreprisePopupComponent,
    OrganisationComponent,
    DetailComponent,
    MenuMycpmComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }