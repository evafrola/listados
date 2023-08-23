const botonAgregar = document.querySelector("#agregar");
const botonLimpiar = document.querySelector("#limpiar");
const inputItem = document.querySelector("#item");
const contenedor = document.querySelector("#contenedor");
const storedItems = JSON.parse(localStorage.getItem("item")) || [];
let array = [];

function cargarLista() {
    contenedor.innerHTML = "";
    array.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element;
        contenedor.appendChild(li);
    });
}

botonAgregar.addEventListener("click", function (){
    const dato = inputItem.value;
        if(dato.trim() !=="") {
            array.push(dato)
            localStorage.setItem("item",  JSON.stringify(array));
            inputItem.value = "";
            cargarLista();
        }
})

botonLimpiar.addEventListener("click", function (){
    localStorage.removeItem("array");
    contenedor.innerHTML = "";
    array = [];
})

document.addEventListener("DOMContentLoaded", function () {
    array = storedItems;
    cargarLista();
})