// const nums = [10,9,7];
// const nums2 = [];

// for(let i=0;i < nums.length;i++){
//     nums2[i] = nums[i]*2;
// }

// console.log(nums2);

// //funció map
// let resultat= []; 
// resultat = nums.map((elem)=>elem*2);

// console.log(resultat);

//exercici 1
// const nums = [5,10,15];
// let resultat = [];
// resultat = nums.map((num)=>num/5);
// console.log(resultat);

// const noms = ["Anna","Joan","Maria"];
// let res = [];
// res = noms.map((names)=>names+"!");
// console.log(res);

// const numeros = [2,4,6,8];
// let elevats = [];
// elevats = numeros.map((nu)=>Math.pow(nu,2));
// console.log(elevats);

// const num = [2,7,4,10];
// const imp = num.filter((num,ind) => ind % 2 == 1);
// console.log(num);

// num.forEach((num)=> console.log(num*3));

// noms.forEach((nom)=> console.log("Hola, "+nom));

// let total = 0;
// nums.forEach((num)=>total +=num);
// console.log(total);

// const jor = [2,3,4];
// const re = jor.reduce((ac,num) => ac = (ac*num),1);
// console.log(re);

//Utilitza.reduce() per concatenar ['Hola', 'món'].
const holaMon = ['Hola', 'món'];
const resp = holaMon.reduce((ac,paraula)=>ac += paraula + " ","");
console.log(resp);