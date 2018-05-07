import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
 selector:'page-result',
 templateUrl:'result.html',
})
export class ResultPage {
 result;
 animals;
 respuestas;
 mostrar;
 formCode:FormGroup;

    constructor(public navPrms :NavParams,
    public formBuilder:FormBuilder){
      this.mostrar =  false;
        this.formCode = formBuilder.group({
            respuesta:['',[Validators.required]]
          })
        
        this.result = navPrms.get('valueFinal');
        if (this.result  <= 4){
  this.animals = "tortuga";
        }
        else if (this.result  <=  7){
  this.animals = "zorro";
          }
          else if (this.result <= 12){
              this.animals = "leon";
          }
      console.log(this.animals)
    }

    ver(){
       this.mostrar = this.respuestas === "12345"? true : false;
       console.log(this.mostrar)

    }

}