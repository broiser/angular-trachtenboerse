import { Injectable } from '@angular/core';
import { ContactQuery } from '../model/contact-query.model';
import { Contact } from '../model/contact.model';

@Injectable()
export class ContactService {
  constructor() {}

  addTodo(newTodo) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    // Add New TodoService
    todos.push(newTodo);
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i, 1);
      }
    }
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldText, newText) {
    let todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text == oldText) {
        todos[i].text = newText;
      }
    }
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getContacts(): Contact[] {
    var contacts: Contact[] = JSON.parse(localStorage.getItem('contacts'));
    if (isNullOrUndefined(contacts)) {
      contacts = [];
    }
    console.log('contactService.getContacts: ' + JSON.stringify(contacts));
    return contacts;
  }

  getContactsByQuery(contactQuery: ContactQuery) {
    return this.getContacts();
  }

  getContactById(id: string): Contact | null {
    return this.getContactsByQuery(new ContactQuery(id, null))[0];
  }

  save(contact: Contact) {
    if (isNullOrUndefined(contact.id)) {
      contact.id = '' + Math.random() * 1000;
    } else {
      this.removeContactById(contact.id);
    }
    var contacts = this.getContacts();
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('contactService.save: ' + JSON.stringify(contacts));
    return contact;
  }

  removeContactById(id: string) {
    var contacts = this.getContacts();

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        contacts.splice(i, 1);
      }
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('contactService.removeContactById' + JSON.stringify(contacts));
  }
}

function isNullOrUndefined(foo: any) {
  return foo == null || foo == undefined;
}
