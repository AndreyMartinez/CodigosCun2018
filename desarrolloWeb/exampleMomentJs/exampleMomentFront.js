document.getElementsByClassName("enviar")[0].addEventListener("click",evento => { 
    let formulario = ["nombre","apellido","tipoDocumento",
  "identificacion","fechaNacimiento","edad","direccion","telefono","celular" ];
    let valores = {}; 
    let horario = moment.format('hh:mm:ss');
    console.log(horario)
    return horario;
       
//     formulario.forEach(function(input){
//     const form = document.forms[0];
//      console.log(form[input]);
//     valores[input] = form[input] && form[input].type ==="date" ? 
//       value = new Date(form[input].value):document.getElementsByClassName(input)[0].value 
//     });
//   let hoy = new Date();
//   let fecha = ( hoy.getTime() -  valores["fechaNacimiento"].getTime())/600000/60/24/365;
//   ;
//     let edadFinal = calcularFecha(fecha);
//     let vericidad = edadFinal ==  valores["edad"] ? "verdadero" : "falso"; 
//     console.log(edadFinal);
//     document.getElementsByClassName("mostrarEdad")[0].innerText = "La edad de "+ valores["nombre"]  +" " +valores["apellido"] +" es "+ calcularFecha(fecha) +"años,  lo cual es "+ vericidad + "a la información del formulario"  ;
  })
  
  
//   function calcularFecha(milisegundos){
//     return milisegundos.toString().split(".")[1].substr(0,1);
//   }

  function momentos(){
       let horario = moment().format('hh:mm:ss');
       console.log(horario)
       return horario;
  }
  
  
  