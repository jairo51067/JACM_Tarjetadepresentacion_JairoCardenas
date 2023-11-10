// window.alert("'Hola esta es una tarjeta de presentacion de Jairo Cárdenas'");


function mySkills() {

  document.getElementById("skill").innerHTML = "Web Designer";

  const elemento = document.getElementById('skill');

  const contenidoOriginal = elemento.innerHTML;

  elemento.innerHTML = " - HTML - CCS - JavaScript - "

  setTimeout(()=>{
    elemento.innerHTML = contenidoOriginal;
}, 2500);

}
