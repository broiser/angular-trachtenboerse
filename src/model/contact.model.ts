import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export class Contact {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  articles: Article[] = [];

  constructor(id: string) {
    this.id = id;
  }

  static asFormGroup(contact: Contact): FormGroup {
    return new FormGroup({
      id: new FormControl(contact.id),
      name: new FormControl(contact.name, Validators.required),
      address: new FormControl(contact.address, Validators.required),
      phone: new FormControl(contact.phone, Validators.required),
      email: new FormControl(contact.email, [
        Validators.required,
        Validators.pattern(
          /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
        ),
      ]),
      articles: new FormArray(
        contact.articles.map((article) => Article.asFormGroup(article))
      ),
    });
  }
}

export class Article {
  id: string;
  title: string;
  robeSize: string;
  price: number;

  constructor(id: string) {
    this.id = id;
  }

  static asFormGroup(article: Article): FormGroup {
    return new FormGroup({
      id: new FormControl(article.id, Validators.required),
      title: new FormControl(article.title, Validators.required),
      robeSize: new FormControl(article.robeSize, Validators.required),
      price: new FormControl(article.price, Validators.required),
    });
  }
}
