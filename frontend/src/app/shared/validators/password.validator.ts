import { FormGroup, FormControl } from '@angular/forms';

export class PasswordValidator {
    static areEqual(formGroup: FormGroup){
        let value:any;
        let valid = true;

        for(let key in formGroup.controls){
            if(formGroup.controls.hasOwnProperty(key)){
                let control: FormControl = <FormControl>formGroup.controls[key];

                if(value === undefined){
                    value = control.value;
                }else{
                    if(value !== control.value){
                        valid = false;
                        console.log(value +" - "+ control.value);
                        break;
                    }
                }
            }
        }

        if(valid){
            console.log(valid);
            return null;
        }

        return {
            notEqual: true
        }
    }
}