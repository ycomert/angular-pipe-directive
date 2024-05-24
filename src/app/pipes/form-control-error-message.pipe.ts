import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage'
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string {
    if (!errors) {
      return '';
    }

    if (errors['required']) {
      return 'This field is required';
    }

    if (errors['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength}`;
    }

    if (errors['email']) {
      return 'Invalid email address';
    }

    return 'Unknown error';
  }

}
