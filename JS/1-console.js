main()

function main(){

	console.log('Hola mundo de un archivo');
	console.info('Este es un info');
	console.warn('este es un warning');
	console.error('este es un error');

uno();
	function uno(){
		dos()
	}

	function dos (){
		console.error ('Aqui hay un error')
	}
	
	var x
	console.table(x = ['Perro','Gato','Raton','Rana'])


	// CONDITIONS
	var r = 7
	// console.assert(condition, message)
	console.assert(r%2==0, 'Este numero no es par')

	//COUNTER
	// Contador incrementable cada vez que se  manda llamar
	// como para ver cuantas veces ser repite un bucle
	console.count();
	console.count();
	console.count();

	console.count('count 1');
	console.count('count 2');
	console.count('count 1');
        
        /*NOTE: console.countReset  : reinicia el contador sin nombre a 0 
                console.countReset('count 1')  : reinicia el contador 'count 1' a 0 
         */

	// CONCATENATE
	console.log("hola", "de", "todo el mundo");

	//VARIABLES
	console.log("Hola soy %s y tengo %i años", "santiago", 29)
	console.log("Hola soy %s y tengo %s años", "santiago", 29)
	console.log("Hola soy %i y tengo %i años", "santiago", 29)
	console.log("Hola soy %s y tengo %i años", "santiago")

	// STYLES
	console.log("%cEste mensaje es con %cestilo", "color:white;background-color:black;padding:10px;",
				"color:blue;margin:15px;");

	console.error("%cEste mensaje es con %cestilo", "color:white;background-color:black;padding:10px;",
				"color:blue;margin:15px;");


  	
	// TRACER

  	function f1(){
  		f2();
  		function f2(){
  			// Aqui se genera un error
  			console.trace("esto es un trace de f2");
  		}
  	}

  	function f3(){
  		f4();
  		function f4(){
  			f1();
  		}
  	}
  	f3();

  	// GROUPS
  	console.group("Grupo de estilos");
  		console.log("%cEste mensaje es con %cestilo", "color:white;background-color:black;padding:10px;",
				"color:blue;margin:15px;");

		console.error("%cEste mensaje es con %cestilo", "color:white;background-color:black;padding:10px;",
				"color:blue;margin:15px;");
  	console.groupEnd();
  	console.group("Grupo de otros");
  		console.log("Esto es otro grupo");
  	console.groupEnd();
  	console.groupCollapsed("Grupo Collapsed");
  		console.log("Esto es el ultimo grupo 1");
  		console.groupCollapsed("Nivel 2");
  			console.log("Esto es el ultimo grupo 2");
  			console.groupCollapsed("Nivel 3");
  				console.log("Esto es el ultimo 3");
  				var yy=2
  				yy=yy*
  				console.log("YY=",yy)
  			console.groupEnd();
  		console.groupEnd();
  	console.groupEnd();
  	
  	// CLEAR
  /////	console.clear();

  	// TIMER

  	console.time('time1');
  	for (var i = 1; i < 10; i++) {
  		console.count('for')
  		if (i==5)
  		{
  			console.log("Reiniciar contador 'for'");
  			console.countReset('for');
  		}
  	}
  	console.timeEnd('time1');
 }
 