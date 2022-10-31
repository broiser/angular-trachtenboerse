import { FormGroup } from "@angular/forms";

export const atLeastOneValidator = (keys: string[]) => {
  return (group: FormGroup) => {
    const { controls } = group;
    return keys.some((key) => controls[key] && !!controls[key].value)
      ? null
      : { atLeastOne: 'error' };
  };
};
