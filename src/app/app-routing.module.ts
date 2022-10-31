import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';

const routes: Routes = [
  { path: 'contact/:id', component: ContactFormComponent },
  { path: 'contacts', component: ContactSearchComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
