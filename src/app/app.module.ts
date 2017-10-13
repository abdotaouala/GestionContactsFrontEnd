import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ContactsService} from "../services/contacts.service";
import {FormsModule} from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'newContact',component:NewContactComponent},
  {path:'editContact/:id',component:EditContactComponent},
  {path:'nouveauContact',component:NouveauContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    EditContactComponent,
    NouveauContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
