//  let kvadratiki = document.getElementById("kvadratiki");
// let i = 1;
//  let kvadratiki = document.createElement("div");
//  if (i <= 64)
//      i++; {
//    if else ( 16 == 0) {
//      style.backgroundColor = "white";
//    } else {
//      style.backgroundColor = "black";
//    }
//  }
// let merc = document.getElementById("merc");
// let audi1 = document.getElementById("audi");
// let bmw1 = document.getElementById("bmw");
// let porshe1 = document.getElementById("porshe");
// let toyota1 = document.getElementById("toyota");
// let hyundai1 = document.getElementById("hyundai");
// let elements = document.querySelector(".elements div");

//  function mercedes() {
//   elements.classList.add("none")
//   merc.classList.remove("none");
//  }
//  function audi() {
//   elements.classList.add("none");
//   audi1.classList.remove("none");
//  }
//  function bmw() {
//   elements.classList.add("none");
//   bmw1.classList.remove("none");
//  }
//  function porshe() {
//   elements.classList.add("none");
//   porshe1.classList.remove("none");
//  }
//  function toyota() {
//   elements.classList.add("none");
//   toyota1.classList.remove("none");
//  }
//  function hyundai() {
//   elements.classList.add("none");
//   hyundai1.classList.remove("none");
//  }


// function text() {
//     document.querySelector("h1").innerHTML= "Добро пожаловать в мир JavaScript";
    
//     document.querySelector("p").innerHTML= "Текст был изменен";
// };\
// let btn=document.getElementById("btn");
//     function func1 {
//     let newdiv=document.createElement("div")
//     newdiv.textContent="lorem";
//     document.body.append(newdiv);

//     newdiv.addEventListener("click", func1);
//     function func1(){
//         newdiv.remove
//     }
// };
// function func1() {
//     text1.innerHTML = "witdh:" + window.innerWidth + "   height:" + window.innerHeight;
// };

// function close1() {
//     let newWindow =window.open();
//     let newE = document.createElement ("p");
//     newE.innerHTML = "welcome to a new page";
//     newWindow.document.body.append(newE);
// }

const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');


openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if () {
        modal.style.display = 'none';
    }
});