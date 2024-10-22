const i = document.querySelector("i");
const navlinks = document.querySelector(".nav-links");
const navbutton = document.querySelector(".nav-button");
const account = document.querySelector(".account");
i.addEventListener("click", () => {
  navlinks.classList.toggle("navlinks");
  navbutton.classList.remove("navbutton");
});
account.addEventListener("click", () => {
  navbutton.classList.toggle("navbutton");
  navlinks.classList.remove("navlinks");
});





const navreg = document.querySelector(".nav-reg")
const rform = document.querySelector(".r-form")
navreg.addEventListener("click", () => {
  if (rform.style.display == "block") {
    rform.style.display = "none";
  } else {
    rform.style.display = "block";
  }
});


const navlogin = document.querySelector(".nav-login")
const lform = document.querySelector(".l-form")
navlogin.addEventListener("click", () => {
  if (lform.style.display == "block") {
    lform.style.display = "none";
  } else {
    lform.style.display = "block";
  }
});
// const a = document.getElementsByTagName("a")[0]; // Select the first anchor element
// const register = document.querySelector(".r-form");

// a.addEventListener("click", () => {
//   if (register.style.display == "block") {
//     register.style.display = "none";
//   } else {
//     register.style.display = "block";
//   }
// });
// const a = document.getElementsByTagName("a");
// const register = document.querySelector(".r-form");

// a.addEventListener("click", () => {
//   if (register.style.display === "block") {
//     register.style.display = "none";
//   } else {
//     register.style.display = "block";
//   }
// });
// const a = document.querySelector("a")
// const register = document.querySelector(".r-form")
// a.addEventListener("click", () => {
//   if (register.style.display == "block") {
//     register.style.display = "none";
//   } else {
//     register.style.display = "block";
//   }
// });




const imgcarbutton = document.querySelector(".img-car-button1");
const popular2 = document.querySelector(".popular-2");
imgcarbutton.addEventListener("click", () => {
  if (popular2.style.display == "block") {
    popular2.style.display = "none";
  } else {
    popular2.style.display = "block";
  }
});





const data = async () => {
  const res = await fetch("./data.json");
  const data = await res.json();

  const container = document.querySelector('.container');
  
  data.map(item => {
    const div = document.createElement('div');
    div.classList.add('a');

    // let id = document.createElement('div');
    // id.textContent = item.item_id;

    let name = document.createElement('h3');
    name.textContent = item.name;

    let price = document.createElement('p');
    price.textContent = `Price: ${item.price}$`;
    

    let category = document.createElement('h2');
    category.textContent = item.category;

    let img = document.createElement('img');
    img.src = item.image;

    container.appendChild(div);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(category);
    div.appendChild(price);
    // div.appendChild(id);
  });
};

data();
