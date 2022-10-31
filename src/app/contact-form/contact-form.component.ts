import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, Contact } from '../../model/contact.model';
import { ContactService } from '../../service/contat.service';

@Component({
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  displayedColumns = ['id', 'title', 'robeSize', 'price', 'action'];
  @ViewChild(MatTable) _matTable: MatTable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId == 'new') {
      this.contactForm = Contact.asFormGroup(new Contact('0'));
    } else {
      this.contactForm = Contact.asFormGroup(
        this.contactService.getContactById(contactId)
      );
    }
  }

  get id(): FormControl {
    return this.contactForm.get('id') as FormControl;
  }

  get articles(): FormArray {
    return this.contactForm.get('articles') as FormArray;
  }

  addArticle() {
    const article = new Article(
      this.id.value + '.' + (this.articles.controls.length + 1)
    );
    this.articles.push(Article.asFormGroup(article));
    this._matTable.renderRows();
  }

  removeArticle(index: number) {
    this.articles.removeAt(index);
    this._matTable.renderRows();
  }

  submit() {
    if (!this.contactForm.valid) {
      return;
    }

    console.log(this.contactForm.value);
    this.contactForm.setValue(
      this.contactService.save(this.contactForm.value as Contact)
    );
  }
}
