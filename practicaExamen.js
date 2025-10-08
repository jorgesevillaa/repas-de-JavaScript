// A partir de un array de usuarios con nombre y edad, devuelve un nuevo array con solo los nombres en mayúsculas.
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 22 }
];

const nova = () => usuarios.map(usu => usu.nombre.toUpperCase());
console.log(nova);


// De una lista de precios ([12.5, 9.99, 20.0, 5.75]), calcula el total acumulado de todos los precios.
const precios = [12.5, 9.99, 20.0, 5.75];
const total = () => precios.reduce((x,num) => x += num,0);
console.log(total);

// A partir de un array de objetos { nombre, aprobado }, devuelve solo los nombres de los alumnos que aprobaron.
const alumnos = [
  { nombre: "Juan", aprobado: true },
  { nombre: "Sofía", aprobado: false },
  { nombre: "Carlos", aprobado: true },
  { nombre: "Lucía", aprobado: false }
];
const apro = () => alumnos.filter(nom => nom.aprobado == true);
console.log(apro);


// Dado un array de objetos con { nombre, salario }, devuelve la suma total de todos los salarios.

// 5️⃣

// A partir de una lista de correos electrónicos, muestra en consola cada uno con el mensaje:
// "Correo enviado a: <email>".

// 6️⃣

// A partir de un array de productos con { nombre, categoria }, devuelve un nuevo array con solo los nombres de los productos de la categoría "tecnología".

// 7️⃣

// De un array [3, 6, 9, 12, 15], crea otro con los valores multiplicados por 10.

// 8️⃣

// Dado un array de números, devuelve cuántos son pares.

// 9️⃣

// A partir de un array de usuarios { id, nombre, activo }, genera un array nuevo solo con los objetos cuyo campo activo sea true.

// 🔟

// A partir de un array de objetos { nombre, ciudad }, devuelve un nuevo array con strings tipo:
// "<nombre> vive en <ciudad>".

// 11️⃣

// Tienes una lista de objetos con { nombre, notas: [x, y, z] }.
// Crea un nuevo array con el promedio de cada estudiante.

// 12️⃣

// De un array [2, 4, 6, 8], usa un método para mostrar cada número junto con su índice en consola.

// 13️⃣

// De una lista de empleados { nombre, salario }, devuelve un array con los que ganen más de 2000 €.

// 14️⃣

// Dado un array con objetos { producto, cantidad }, calcula el total de productos vendidos (suma de todas las cantidades).

// 15️⃣

// Tienes un array de objetos { nombre, edad }.
// Crea un nuevo array con los mismos datos pero agregando un campo nuevo mayorEdad: true/false.

// 16️⃣

// A partir de [10, 15, 20, 25, 30], genera la suma de los valores que sean mayores que 15.

// 17️⃣

// Dado un array de nombres, muestra en consola cada uno con un mensaje tipo:
// "Bienvenido, <nombre>!".

// 18️⃣

// De un array de películas { titulo, año }, devuelve solo las películas posteriores al año 2010.

// 19️⃣

// Tienes un array de objetos { nombre, pais }.
// Devuelve un array de strings del tipo "nombre (pais)".

// 20️⃣

// De una lista de números [1, 2, 3, 4, 5], devuelve un nuevo array con los números al cuadrado.