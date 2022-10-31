import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContactService } from '../service/contat.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';

@NgModule({
  declarations: [AppComponent, ContactFormComponent, ContactSearchComponent],
  imports: [
    AppRoutingModule,
    AppMaterialModule,
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule, // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
