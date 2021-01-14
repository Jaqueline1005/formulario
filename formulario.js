// JavaScript Document

function validar_formulario(){//funcion que valida todos los campos del formulario
	
	//declaramos las variables del formulario
	
	var nombre = document.formulario.nombre;
    var apellido = document.formulario.apellido;
	var fecha = document.formulario.fecha;
	var cedula = document.formulario.cedula;
	var opciones = document.formulario.gene;
	var telefono = document.formulario.telefono;
	var celular = document.formulario.celular;
	var idioma = document.formulario.idioma;
	var ciudad = document.formulario.ciudad;
	var pais = document.formulario.pais;
	indice = document.getElementById("ocupacion").selectedIndex;
	var email = document.formulario.email;
	
	var clave1 = document.formulario.clave1;
    var clave2 = document.formulario.clave2;
	var mirarIgual="no";
    var aviso13 = document.getElementById("aviso13");
	
	
	var pulsado = false;//variable de comprobación para el radio button
	
	var elegido = -1; //número del elemento elegido en el array
	
	//declaramos los avisos de error
	
	var aviso1 = document.getElementById("aviso1");
	var aviso2 = document.getElementById("aviso2");
	var aviso3 = document.getElementById("aviso3");
	var aviso4 = document.getElementById("aviso4");
	var aviso5 = document.getElementById("aviso5");
	var aviso6 = document.getElementById("aviso6");
	var aviso7 = document.getElementById("aviso7");
	var aviso8 = document.getElementById("aviso8");
	var aviso9 = document.getElementById("aviso9");
	var aviso10 = document.getElementById("aviso10");
	var aviso11 = document.getElementById("aviso11");
	var aviso12 = document.getElementById("aviso12");
	var aviso14 = document.getElementById("aviso14");
	
	//inicializamos el aviso en null
	
    aviso1.innerHTML = "";
	aviso2.innerHTML = "";
	aviso3.innerHTML = "";
	aviso4.innerHTML = "";
	aviso5.innerHTML = "";
	aviso6.innerHTML = "";
	aviso7.innerHTML = "";
	aviso8.innerHTML = "";
	aviso9.innerHTML = "";
	aviso10.innerHTML = "";
	aviso11.innerHTML = "";
	aviso12.innerHTML = "";
	aviso13.innerHTML = "";
	aviso14.innerHTML = "";
    var enviar = "si";
	
	aviso.innerHTML = ""
    var enviar = "si"
	aviso.innerHTML = ""
    var enviar = "si"
	
	//comenzamos a validar todos los campos; lo que hace la condicion es que no puede a ver valores nulos ni en cero
    
	if (nombre.value == "" || nombre.value.indexOf(" ") == 0) {
		var texto = "*Es obligatorio introducir el nombre.<br/>"
		aviso1.innerHTML += texto
		enviar = "no"
            }
			
    if (apellido.value == "" || apellido.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir el apellido.<br/>" 
		aviso2.innerHTML += texto
		enviar = "no"
		}
		
	if (fecha.value == "" || fecha.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio seleccionar la fecha.<br/>";
		aviso3.innerHTML += texto;
		enviar = "no";
		}
		
	if (cedula.value == "" || cedula.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir la cedula.<br/>";
		aviso4.innerHTML += texto;
		enviar = "no";
		}
		
	for (i=0;i<opciones.length;i++) { //bucle de comprobación
               if (opciones[i].checked == true) {
               pulsado = true 
               elegido = i //número del elemento elegido en el array
               }
             }
         if (pulsado == true) { //mensaje de formulario válido
            miOpcion = opciones[elegido].value
            }
         else { //mensaje de formulario no válido.
		 var texto = "*Es obligatorio seleccionar el sexo.<br/>";
		aviso5.innerHTML += texto;
            enviar = "no";
            }
			
	if (telefono.value == "" || telefono.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir la telefono.<br/>";
		aviso6.innerHTML += texto;
		enviar = "no";
		}
		
		if (celular.value == "" || celular.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir el celular.<br/>";
		aviso7.innerHTML += texto;
		enviar = "no";
		}
		
		if (idioma.value == "" || idioma.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir el idioma.<br/>";
		aviso8.innerHTML += texto;
		enviar = "no";
		}
		
		if (ciudad.value == "" || ciudad.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir la ciudad.<br/>";
		aviso9.innerHTML += texto;
		enviar = "no";
		}
		
		if (pais.value == "" || pais.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir el país.<br/>";
		aviso10.innerHTML += texto;
		enviar = "no";
		}
		
		if( indice == 0||indice==null) {
			var texto = "*Es obligatorio seleccionar una ocupación.<br/>";
			aviso11.innerHTML += texto;
			enviar = "no";
			}
			
		if (email.value == "" || email.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir el E-mail.<br/>";
		aviso12.innerHTML += texto;
		enviar = "no";
		}
		
		if (clave1.value == clave2.value) {
            mirarIgual = "si"
            }
         else {
            texto = "La contraseña y su repetición deben ser iguales.<br/>"  
            aviso13.innerHTML += texto;
			enviar = "no";
            }
		
		if (clave1.value == "" || clave1.value.indexOf(" ") == 0 ) {
		var texto = "*Es obligatorio introducir una contraseña.<br/>";
		aviso14.innerHTML += texto;
		enviar = "no";
		}
		
	if (enviar == "no") {
		return false;
		}
		
	if (enviar == "si") {
		mensaje = "bienvenid@ " + nombre.value + " "  + apellido.value;
		alert(mensaje);
		return true;
		}
         }
		 
function restaurar() {//esta funcion borra el aviso anterior en cuanto el usuario vuelve a seleccionar un campo de texto obligatorio.
         var aviso1 = document.getElementById("aviso1");
         aviso1.innerHTML = "";
		 
         var aviso2 = document.getElementById("aviso2");
         aviso2.innerHTML = "";
		 
         var aviso3 = document.getElementById("aviso3");
         aviso3.innerHTML = "";
		 
         var aviso4 = document.getElementById("aviso4");
         aviso4.innerHTML = "";
		 
         var aviso5 = document.getElementById("avis05");
         aviso5.innerHTML = "";
		 
         var aviso6 = document.getElementById("aviso6");
         aviso6.innerHTML = "";
		 
         var aviso7 = document.getElementById("aviso7");
         aviso7.innerHTML = "";
		 
         var aviso8 = document.getElementById("aviso8");
         aviso8.innerHTML = "";
		 
         var aviso9 = document.getElementById("aviso9");
         aviso9.innerHTML = "";
		 
         var aviso10 = document.getElementById("aviso10");
         aviso10.innerHTML = "";
		 
         var aviso11 = document.getElementById("aviso11");
         aviso11.innerHTML = "";
		 
         var aviso12 = document.getElementById("aviso12");
         aviso12.innerHTML = "";
		 
         var aviso13 = document.getElementById("aviso13");
         aviso14.innerHTML = "";
         var aviso14 = document.getElementById("aviso14");
         aviso14.innerHTML = "";
         }