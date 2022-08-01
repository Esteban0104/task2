//Declaraciòn de objeto/datos para mostrar la informaciòn en la web
let data = {
  currentDate: "2022-01-01",
  events: [
    {
      _id: 1,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      _id: 2,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
      name: "Korean style",
      date: "2022-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      _id: 3,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      _id: 4,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      _id: 5,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      _id: 6,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      _id: 7,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      _id: 8,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      _id: 9,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Campo de FutbÃ³l",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      _id: 10,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
      name: "15K NY",
      date: "2022-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      _id: 11,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      _id: 12,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      _id: 13,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
      name: "Batman",
      date: "2021-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      _id: 14,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
  ],
};

//Declaraciòn de identificar/div donde se va a mostrar la informaciòn
const containerUpcoming = document.getElementById(`containerCards`);
const containerPast = document.getElementById(`containerCardsPast`);
const containerHome = document.getElementById(`containerCardsHome`);
const containerCategorys = document.getElementById("containerCategorys");

let category = "";
let categoryClone = "";
let arrCategorys = [];

//Tomamos fecha base que viene dentro del objeto/informaciòn con la que estamos trabajando
let date = new Date();
let output = data.currentDate;

//Imprime en consolalafecha que estamos tomando
console.log(output);

//Declaramos una fucniòn para llamar en el html requerido en un script de js
function UpcomingEvents() {
  //Recorremos el objeto/informaciòn para sacar su informaciòn a mostrar
  data.events.forEach((info) => {
    //Comparamos la fecha que nso dan con las fechas de las tarjetas para saber cuales son de antes y despues de la fecha que queremos
    if (info.date > output) {
      //Vamos a pintar las categorias en nuestro HTML
      containerCategorys.innerHTML += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${info._id}">
        <label class="form-check-label" for="inlineCheckbox1">${info.category}</label>
    </div>`;

      //aqui es donde pintamos/(imprimimos datos) en nuestro contenedor en HTML
      containerUpcoming.innerHTML += `<div class="col-md-3">
    <div class="card" style="width: 18rem;">
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${info.name}</h5>
            <p class="card-text">${info.description}</p>
        </div>
    
        <div class="card-body d-flex justify-content-around">
            <span>Price $2000 </span>
            <a href="details.html">
            <button type="button" class="btn btn-primary">  Details</button>
            </a>
        </div>
    </div>
    </div>`;
    }
  });
}

//Esta fucniòn es para pastEvents
function pastEvents() {
  //Recorremos el objeto/informaciòn para sacar su informaciòn a mostrar
  data.events.forEach((info) => {
    //Comparamos la fecha actual con las fechas de las tarjetas para saber cuales son de antes y depues de la fecha que queremos
    if (info.date < output) {
      //aqui es donde pintamos/(imprimimos datos) en nuestro contenedor en HTML
      containerPast.innerHTML += `<div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${info.name}</h5>
                <p class="card-text">${info.description}</p>
            </div>
        
            <div class="card-body d-flex justify-content-around">
                <span>Price $2000 </span>
                <a href="details.html">
                <button type="button" class="btn btn-primary">  Details</button>
                </a>
            </div>
        </div>
        </div>`;
    }
  });
}

//Esta fucniòn es para home
function homeEvents() {
  //Recorremos el objeto/informaciòn para sacar su informaciòn a mostrar
  data.events.forEach((info) => {
    //* Aquí vamos a comparar las categorias para no repetirlas

    if (category == "" && categoryClone == "") {
      //vamos pintar las categorias en nuestro HTML
      containerCategorys.innerHTML += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="checkBoxCategory" value="${info.category}"  onclick="filtroCheckBox('${info.category}')">
    <label class="form-check-label" for="checkBoxCategory">${info.category}</label>
    </div>`;

      categoryClone = info.category;
    } else if (info.category != categoryClone) {
      //vamos pintar las categorias en nuestro HTML
      containerCategorys.innerHTML += `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="checkBoxCategory" value="${info.category}"  onclick="filtroCheckBox('${info.category}')">
      <label class="form-check-label" for="checkBoxCategory">${info.category}</label>
      </div>`;

      categoryClone = info.category;
    }

    //aqui es donde pintamos/(imprimimos datos) en nuestro contenedor en HTML
    containerHome.innerHTML += `<div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${info.name}</h5>
                <p class="card-text">${info.description}</p>
            </div>
        
            <div class="card-body d-flex justify-content-around">
                <span>Price $2000 </span>
                <a href="details.html">
                <button type="button" class="btn btn-primary">  Details</button>
                </a>
            </div>
        </div>
        </div>`;
  });
}

function filtroCheckBox(category) {
  //Limpiamos el contenedor para pintar lo que buscamos
  containerHome.innerHTML = ``;

  //guardamos la categoria a buscar en nuestro arreglo
  arrCategorys.push(category);

  //Limpiamos el array para no tener datos repetidos
  let arrResult = arrCategorys.filter((item, index) => {
    return arrCategorys.indexOf(item) === index;
  });
  console.log(arrResult);

  data.events.forEach((info) => {
    //* Aquí vamos a comparar las categorias para no repetirlas
    if (info.category == category) {
      //aqui es donde pintamos/(imprimimos datos) en nuestro contenedor en HTML
      containerHome.innerHTML += `<div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${info.name}</h5>
                <p class="card-text">${info.description}</p>
            </div>

            <div class="card-body d-flex justify-content-around">
                <span>Price $2000 </span>
                <a href="details.html">
                <button type="button" class="btn btn-primary">  Details</button>
                </a>
            </div>
        </div>
        </div>`;
    }
  });
}
