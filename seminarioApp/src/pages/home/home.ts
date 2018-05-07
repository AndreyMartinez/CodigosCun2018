import { Component } from '@angular/core';
import { NavController,ToastController,AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';



//pages 
import {QuestionPage} from '../questions/questions'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  codigo;
  formCode:FormGroup;


  constructor(public navCtrl: NavController, 
    public formBuilder:FormBuilder,
  public toastCtrl:ToastController,
public alertCtrl:AlertController) {

    //form group code
  this.formCode = formBuilder.group({
    codigo:['',[Validators.required,Validators.minLength(6)]]
  })


  }
  ejecutar(){
    console.log(this.codigo)
    if(this.codigo === "1234567"){
        let alert = this.alertCtrl.create({
title:'Bienvenido',
subTitle:'Este es un  cuestionario qué nos gustaria que respondieras animo',

buttons:['Comenzar']
        })
        alert.present();
      this.navCtrl.push(QuestionPage);
    }
    else {
      console.log("false");
      let toast = this.toastCtrl.create ({
        message:"El código  aun no está  habilitado, intentalo más tarde",
        duration:3000,
        position:"bottom"
    })
     toast.present();
    }
  }


}
