//A partir d'un array de numeros, mostra la suma de tots ells
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sumaTots = array1.reduce((acum,num)=> acum += num,0)
// console.log(sumaTots);
//45

//A partir d'un array d'strings i numeros, mostra un string que els continga tots
// let array2 = ['a', 1, 'b', 2, 'c', 3];
// const tots = array2.reduce((acu,str)=>acu+=str,"");
// console.log(tots);
// a1b2c3

// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres'] 
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}
// let dies = ['dilluns', 'dimarts', 'dimecres'];
// let nova = dies.reduce((nouObjecte,unDia,pos)=>{
//     nouObjecte[unDia]=pos;
//     return nouObjecte;
// },{});
// console.log(nova);

//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components
// [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]
let musics = [
    {'nom': 'Joan', 'instrument': 'vocal'},
    {'nom': 'Pep', 'instrument': 'guitarra'},
    {'nom': 'Vicent Lloret', 'instrument': 'guitarra'},
    {'nom': 'Ariadna', 'instrument': 'bateria'},
    {'nom': 'Guillem', 'instrument': 'baix'}
]

// const noms = musics.reduce((ac,nomb,pos)=>{
//     ac[pos] = nomb.nom;
//     return ac; 
// },[]);
// console.log(noms);

//Ara feu-ho utilitzant map()
// const noms = musics.map((nomb)=> nomb.nom);
// console.log(noms);

//Ara que torne un array només amb els noms del musics que toquen la guitarra
//['Pep', 'Vicent Lloret']
// const nou = musics.filter((nomb)=> nomb.instrument == 'guitarra');
// const noms = nou.map((nomb)=> nomb.nom);
// console.log(noms);

//Amb reduce
//['Pep', 'Vicent Lloret']
// const nou = musics.reduce((arrayGui,nomb,pos)=>{
//     if(nomb.instrument == "guitarra"){arrayGui[pos]=nomb.nom}
//     return arrayGui;
// },[]);

// console.log(nou);

//----------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password"
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password"
    }]

    //Que torne un array d'objectes amb l'email, el tel i la web
    // const result = users.map(user => ({
    //     email: user.email,
    //     phone: user.phone,
    //     website: user.website
    // }));

    // const result = users.map(({email,website,phone}) => ({email, website, phone}));

// console.log(result);
[
    {
        email: 'Daphne43@yahoo.com',
        website: 'carmela.net',
        phone: '1-563-675-1857 x11708'
    },
    {
        email: 'deno@google.com',
        website: 'dd.net',
        phone: '1-123-543-1857 123212'
    }
]


//-----------------------------------------------------
//A partir d'un arrar de comandes com el proporcionat
let comandes = [
    {
        client: {
            nom: "Manel Viel"
        },
        productes: [
            {
                id: 1,
                nom: "Taronges"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Joan Mi"
        },
        productes: [
            {
                id: 3,
                nom: "Peres"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Tomas Marin"
        },
        productes: [
            {
                id: 4,
                nom: "Freses"
            }, {
                id: 2,
                nom: "Peres"
            }, {
                id: 1,
                nom: "Platans"
            }
        ]
    }
]

// tornar un array anomenat llistat de comandes, on cada element siga un array d'objectes on 
// aparega només el client i el producte de la seua comanda.
const llistatDeComandes = comandes.map((cli) => cli.productes.map(produ => ({
        client: cli.client.nom,
        producte: produ.nom})));
console.log(llistatDeComandes);
// Exemple:

//llistatDeComandes => [
//    [
//        { client: 'Manel Viel', productes: 'Taronges' },
//        { client: 'Manel Viel', productes: 'Pomes' }
//    ],
//    [
//        { client: 'Joan Mi', productes: 'Peres' },
//         { client: 'Joan Mi', productes: 'Pomes' }
//     ],
//     [
//         { client: 'Tomas Marin', productes: 'Freses' },
//         { client: 'Tomas Marin', productes: 'Peres' },
//         { client: 'Tomas Marin', productes: 'Platans' }
//     ]
// ]



