const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
var count = 0;


const array = ["images/pic5.jpg", "images/pic4.jpg", "images/pic3.jpg", "images/pic2.jpg", "images/pic1.jpg",]
let text = ["alto", "bajo", "petiso", "gordo", "delgado"]


for (let i = 0; i < array.length; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', `${array[i]}`);
    newImage.setAttribute('alt', `${text[i]}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", function(){
        let atribu = displayedImage.setAttribute("src", `${array}`)
       
    })
}

let activeBtn = btn.addEventListener("click", function () {
    
    if (count == 0) {
        btn.classList.add("ligth");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        count = 1;
        btn.classList.remove("dark");
        console.log(count)
    } else {
        btn.classList.remove("ligth");
        btn.classList.add("dark")
        btn.textContent = "Darken"
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
        count = 0;
    }
    
})
/*pensemos la logica
nosotro primeros tenemos que cuando clickeemos, la imagen creada, esa misma imagen se valla a la parte mas grande, para eso, primero tenemos que obtener la url de dicha imagen, y despues, inyectarla en en display mayor */
    
