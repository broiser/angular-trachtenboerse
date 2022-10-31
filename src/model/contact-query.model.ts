import { FormControl, FormGroup } from '@angular/forms';
import { atLeastOneValidator } from '../validator/at-least-one.validator';

export class ContactQuery {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static asFormGroup(contactQuery: ContactQuery): FormGroup {
    return new FormGroup(
      {
        id: new FormControl(contactQuery.id),
        name: new FormControl(contactQuery.name),
      },
      { validators: atLeastOneValidator(['id', 'name']) }
    );
  }
}
