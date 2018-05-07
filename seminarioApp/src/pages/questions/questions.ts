import {Component} from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import {ToastController, NavController} from 'ionic-angular';

//pages
import {ResultPage} from '../result/result';

@Component({
    selector:'page-questions',
    templateUrl:'questions.html',
})
export class QuestionPage{
    formQuestions : FormGroup;

   question = {
       one:"",
       two:"",
       three:"",
       four:"",
       five:"",
       six:"",
       seven:"",
       eight:"",
       nine:"",
       ten:"",
       eleven:"",
   }
  constructor(public navCtrl: NavController, 
    public formBuilder:FormBuilder,
  public toastCtrl:ToastController) {

    //form group code
  this.formQuestions = formBuilder.group({
    one:['',[Validators.required]],
    two:['',[Validators.required]],
    three:['',Validators.required],
    four:['',Validators.required],
    five:['',Validators.required],
    six:['',Validators.required],
    seven:['',Validators.required],
    eight:['',Validators.required],
    nine:['',Validators.required],
    ten:['',Validators.required],
    eleven:['',Validators.required],


  })
}  
    
    test(){
        console.log( this.question.five)
        let result = [];
        result.push(this.question.four[0] ==="a" && this.question.four[1] === "c" && this.question.four[2] === "f"   ? true:false);
        result.push(this.question.five[0]==="b"&&  this.question.five[1] === "d" && this.question.five[2] ===  "e" && this.question.five[3] === "f"? true: false );
        result.push(this.question.one[0] ==="c" ? true: false);
        result.push(this.question.two[0] ===  "b"?  true:false);
        result.push(this.question.three[0] === "c"?true:false);
        result.push(this.question.six[0]==="b"?true:false);
        result.push(this.question.seven[0] === "a" ? true:false);
        result.push(this.question.eight[0] === "a"?true:false);
        result.push(this.question.nine[0] ==="c" ? true:false);
        result.push(this.question.ten[0] ==="b" ? true:false);
        result.push(this.question.eleven[0] ==="a"?true:false);
        console.log(result)
       let finale  = 0 ;  
        result.forEach(function(valor){
      if(valor){
     finale ++ 
      }
      else{

      }
    })      
    console.log(finale)
    this.navCtrl.push(ResultPage,{valueFinal:finale});
 }
}