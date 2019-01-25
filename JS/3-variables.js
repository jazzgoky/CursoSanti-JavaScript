
////////////// 25 Enero 2019 ///////////////////////
// VARIABLES

var nombreVariable =10;
console.log(nombreVariable);

nombreVariable ="Est es un string";
console.log(nombreVariable);

nombreVariable =false;
console.log(nombreVariable);

var ent=10;
var flot=5.5;
var str= "string";
var bol= true;
var arr=[1,"str",false];

// tipo objeto
//var obj = 

//CONSTANTS
// Nota: El nombre de las constantes por buenas practicas debe ser en Mayusculas
const EMPRESA = "SANMINA"; 
console.log(EMPRESA);
//EMPRESA ="FLEX";  // Manda error : Uncaught TypeError: Assignment to constant variable

let x =5.66; // si se vuelve a declarar una variable tipo let con el mimso nombre, solo vive dendro de la seccion de codigo donde se creo.
var y=6.55; // cada vez que se declara una variable con el mismo nombre, se reemplaza
console.log("Let x:",x);
console.log("Let y:",y);

if (true){
	let x =7.55;
	var y=8.55;
	console.log("Let x:",x);
	console.log("Let y:",y);
}

console.log("Let x:",x);
console.log("Let y:",y);

/* Mensaje: 
	Let x: 5.66
	Let y: 6.55
	Let x: 7.55
	Let y: 8.55
	Let x: 5.66
	Let y: 8.55
*/


var myvar=5;
var myvar2=10;
var myvar3="Esto es un texto";

console.log(myvar+myvar3+myvar2); 				//	5 					+	Esto es un texto 	+	10 		
console.log(myvar+myvar2+myvar3); 				//	5					+	10					+	Esto es un texto
console.log(myvar3+myvar+myvar2); 				//	Esto es un texto 	+	5					+	10
console.log(myvar3+myvar-myvar2);    			//	Esto es un texto 	+	5					-	10
console.log(myvar3 + (myvar+myvar2));			//  Esto es un texto 	+	(5					+	10)
console.log(myvar3+(myvar+myvar2) + true)		//	Esto es un texto    +	(5					+	10) 				+	true
console.log(myvar3+(myvar+myvar2+true) + true)	//	Esto es un texto    +	(5					+	10					+	true) 	+	true

/* Mensaje:
	5Esto es un texto10
	15Esto es un texto
	Esto es un texto510
	NaN
	Esto es un texto15
	Esto es un texto15true
	Esto es un texto16true
*/

var num = 3;
var str='3';

if(num==str){
	console.log("si es igual");
}
else
{
	console.log("no es igual");	
}

