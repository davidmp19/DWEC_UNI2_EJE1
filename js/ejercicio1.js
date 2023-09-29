var nombre=prompt("Dime el nombre");
var apellido1=prompt("Dime el primer apellido");
var apellido2=prompt("Dime el segundo apellido");

var cadena=nombre + " "+apellido1 + " " +apellido2 ;

alert("La logitud es de " +cadena.length);
alert(cadena.toLowerCase());
alert(cadena.toUpperCase());

alert("Nombre:" );
alert("Primer apellido:" );
alert("Segundo apellido:" );

alert("El nombre de usuario es:" +nombre+""+apellido1.charAt(0)+""+apellido2.charAt(0));
