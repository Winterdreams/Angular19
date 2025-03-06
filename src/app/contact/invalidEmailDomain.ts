import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDoaminValidator(hosts: string[]) : ValidatorFn {
    //if the value is invalid, return an object as type of error, if fuction return null the value is considered valid
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value?.toLowerCase();
    
        if (!value){
            return null;
        }
    
        const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);
    
        return matches ? { invalidEmailDomain : true} : null;
    }
}