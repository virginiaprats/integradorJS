
function validar(event, formulario){
    event.preventDefault();

    if(formulario.nombre.value.trim().length==0){
        alert("Debe ingresar un nombre");
        return false;
    }

    if(formulario.apellido.value.trim().length==0){
        alert("Debe ingresar un apellido");
        return false;
    }

    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!expresionRegular.test(formulario.email.value)){
        alert("Debe ingresar un mail válido");
        return false;
    }

    if(formulario.categoria.value == ""){
        alert("Seleccione una categoria");
        return false;
    }

    if(formulario.cantidad.value == ""){
        alert("Seleccione una cantidad");
        return false;

    } else {
     
        var cantidad = formulario.cantidad.value;
        var categoria = formulario.categoria.value;
  

        var montoAPagar = cantidad * (200*categoria);

        document.getElementById('total').innerHTML = montoAPagar;



    }
        return true;
}


function resetear(){
    const form = document.getElementById('formulario');
    form.reset();
    document.getElementById('total').innerHTML = 0;

}


const btnBorrar = document.getElementById('borrar');
btnBorrar.addEventListener('click', resetear);


/*
function calcular(){
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var categoria = parseInt(document.getElementById('categoria').value);
    var montoAPagar= 0;
    if(categoria==1){
        montoAPagar = cantidad * (200*0.2);
    } else if (categoria==2){
        montoAPagar = cantidad * (200*0.5);
    } else {
        montoAPagar = cantidad * (200*0.85);
    }
    console.log(montoAPagar);
    document.getElementById('total').innerHTML = montoAPagar;
}


//Al hacer click en el botón, llamo a la función "calcular"
const btnCalcular = document.getElementById('boton');
btnCalcular.addEventListener('click', calcular);

*/