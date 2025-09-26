const dadesUsuaris = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990"
            }
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
        }
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342"
            }
        },
        phone: "(254)954-1289",
        website: "",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems"
        }
    }
]

//Crear una funció que es diga llistat_Id_Nom_Email() que ens torne un array
// d'objectes amb l'id, nom i email dels usuaris
/* [
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
...
] */
//fer-ho amb map
function llistat_Id_Nom_Email(){
    const arrTornada = dadesUsuaris.map(({id,name,email}) => ({id,name,email}));
    return arrTornada;
}
console.log(llistat_Id_Nom_Email());
console.log("-----------------");

//fer-ho amb reduce (canvieu-li el nom a la funció per llistat_Id_Nom_Email_reduce())
function llistat_Id_Nom_Email_reduce(){
    const arrTornada = dadesUsuaris.reduce((arr, { id, name, email }) => {
        arr.push(({ id, name, email }));
        return arr;
    },[] );
    return arrTornada;
}
console.log(llistat_Id_Nom_Email_reduce());
console.log("-----------------");


//Crear una funció llistaAmbAddress() que ens torne un llistat d'objectes que contenen
// els atributs id, name, email, i address, PERÒ address serà un string que concatenarà els atributs
// street suite i zipcode city
function llistaAmbAddress(){
    const arrTornada = dadesUsuaris.map(({id,name,email,address}) => ({id,name,email,
        adress: address.street + " " + address.suite + " " + address.zipcode + " " + address.city
    }));
    return arrTornada;
}
console.log(llistaAmbAddress());
//Exemple: 
/* {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    address: 'Kulas Light Apt. 556\n        92998-3874 Gwenborough'
   },
   {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    address: 'Victor Plains Suite 879\n        90566-7771 Wisokyburgh'
    } */



//Crea una funció llistaIds_EmpresesSenseWebsite() que torne un array amb els id d'aquelles empreses que no tenen website
//[ { id: 2 }, { id: 5 } ]
console.log("-----------------");
// const llistaIds_EmpresesSenseWebsite = () => dadesUsuaris.filter(user => user.website === "").map(user => ({ id: user.id }));
const llistaIds_EmpresesSenseWebsite = () => dadesUsuaris.reduce((arr,user) => {
    if(user.website == ""){
        arr.push({id : user.id})
    }
    return arr;
},[]);
console.log(llistaIds_EmpresesSenseWebsite());
console.log("-----------------");

//Crear una funció esWebsiteBuit(usuari) que donat un objecte usuari, em diga si la website esta buida o no
const esWebsiteBuit = (usuari) =>{
    return usuari.website.lenght===0;
}
console.log(esWebsiteBuit(dadesUsuaris[3]));

//Crear una funció tornaId(usuari) que donat un usuari em torne un objecte id
console.log("-----------------");
const tornaId = (usuari) => {
    return usuari.id;
}
console.log(tornaId(dadesUsuaris[1]));
//Creeu una funció (POSEU-LI vosaltres un nom descriptiu) que amb un reduce/filter, torne un array amb els id d'aquelles empreses que no tenen website
//[{ id: 2 }, { id: 5 }]
console.log("-----------------");
const senseWeb = () => dadesUsuaris.reduce((arr,user) => {
    if(user.website.length === 0) arr.push({id : user.id});
    return arr;
},[])
console.log(senseWeb());
//reduce en una sola línia
// [ { id: 2 }, { id: 5 } ]
console.log("-----------------");
const senseWeb2 = () => dadesUsuaris.reduce((arr,user) => arr.push(esWebsiteBuit(usuari)));
console.log(senseWeb2());