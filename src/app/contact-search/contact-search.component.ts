import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactQuery } from '../../model/contact-query.model';
import { Contact } from '../../model/contact.model';
import { ContactService } from '../../service/contat.service';

@Component({
  templateUrl: './contact-search.component.html',
})
export class ContactSearchComponent implements OnInit {
  contactQueryForm: FormGroup;

  contacts: Contact[] = [];
  displayedColumns = ['id', 'name', 'address'];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactQueryForm = ContactQuery.asFormGroup(
      new ContactQuery(null, null)
    );
  }

  submit() {
    if (!this.contactQueryForm.valid) {
      return;
    }

    console.log(this.contactQueryForm.value);
    const contactQuery = this.contactQueryForm.value as ContactQuery;
    this.contacts = this.contactService.getContactsByQuery(contactQuery);
  }
}
