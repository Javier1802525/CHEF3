let discografia=[
    {
        nombre:"Sui Generis",
        anio:2018,
        canciones:["Loca","Me gusta","Vamos a dar el roll","Voy a estar bien","Café","Efecto mariposa","Andrómeda","Ruego","Hasta que la muerte nos separe"]
    },
    {
        nombre :"Los No Tan Tristes.",
        anio:2021,
        canciones:[
            "Invisible. Nanpa Básico · Charles Ans · Gera MX.",
            "Penitencia Charles Ans · Gera MX · Nanpa Básico.",
            "Déjame en Paz. Charles Ans · Nanpa Básico · Gera MX.",
            "Ya No Te Pude Ver. Gera MX · Nanpa Básico · Charles Ans"
        ]
    }
]
function buscar(){
    const name = document.getElementById('nombre').value;
    let  nombre;
    let  año;
    let  canciones;
    for ( let i = 0; i < discografia.length; i++){
        if(discografia[i].nombre == name){
            nombre = discografia[i].nombre;
            año = discografia[i].anio;
            canciones = discografia[i].canciones; //;
            break;
        }
    }
    document.getElementById('title').innerText= "Disco "+nombre; 
    document.getElementById('año').innerText= "Año de Lanzamiento "+año; 
    //mostrando los ingredientes
    const lista  = document.getElementById('canciones');
    const ul = document.createElement('ul');
    for (let i = 0; i < canciones.length; i++) {
        const li = document.createElement('li');
        li.textContent = canciones[i]; 
        ul.appendChild(li); 
    } 
    lista.appendChild(ul);
}
/**
 * validacion de entra de busqueda -(Indistinto Mayus minus y espacio)
 * validacion si existe el nombre de receta buscar
 * solucionar todos los incovenientes que puedan tener al testear la funcionalidad()
*/