import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CommonValidations {

  static MatchPassword(control: AbstractControl): ValidationErrors | null {
      if ( !control.parent || !control ){
          return null;
      }
      const password = control.parent.get('pswd');
      const passwordConfirm = control.parent.get('confirmPswd');
      if ( !password || !passwordConfirm ){
          return null;
      }
      if ( passwordConfirm.value === '' ){
          return null;
      }
      if ( password.value === passwordConfirm.value ){
          return null;
      }
      return {passwordsNotMatching: true};
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && String(control.value).match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)) {
      return null;
    } else {
      return { 'invalidEmail': true };
    }
  }

  static numberValidator(control: AbstractControl): ValidationErrors | null {

    if (control.value && String(control.value).match(/^(0|[1-9][0-9]*)$/)) {
      return null;
    } else {
      return { 'invalidNumber': true };
    }
  }

  static mobileNoValidator(control: AbstractControl): ValidationErrors | null {
    // "/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/";
    if (control.value && String(control.value).match(/^(7[0-9]{8,10}|07[0-9]{8,10})$/)) {
      return null;
    } else {
      return { 'invalidMobile': true };
    }
  }

  static phoneNoValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && String(control.value).match(/^0[0-9]{8,10}$/)) {
      return null;
    } else {
      return { 'invalidPhone': true };
    }
  }

  static aphaNumerValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && String(control.value).match(/^[a-z0-9]+$/i)) {
      return null;
    } else {
      return { 'invAlphaNum': true };
    }
  }

  static nameValidator(control: AbstractControl): ValidationErrors | null {
    //only for characters without space /^[a-zA-Z]+$/
    //characters with space and numbers ^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$
    if (control.value && String(control.value).match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
      return null;
    } else {
      return { 'invalidName': true };
    }
  }

}
