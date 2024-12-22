let dynamic = [
  {
    img: "",
    h1: "Korma",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    type: "dinner",
  },
  {
    img: "",
    h1: "Paye",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    type: "lunch",
  },
  {
    img: "",
    h1: "nihari",
    p: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    type: "lunch",
  },
  {
    img: "",
    h1: "Chai Partha",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    type: "breakfast",
  },
  {
    img: "",
    h1: "Orange Juice",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    type: "shakes",
  },
  {
    img: "",
    h1: "Halwa Pori",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    type: "breakfast",
  },
];

let container = document.querySelector(".container");

function items(category) {
  if (!category) {
    container.innerHTML = "";
    dynamic.forEach((e) => {
      let box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = ` <img src="${e.img}" alt="">
        <h1>${e.h1}</h1>
        <p>${e.p}</p>`;
      container.appendChild(box);
    });
  } else if (category === "Breakfast" || category ==="Lunch" || category ==="Dinner" || category ==="Shakes" ){
    container.innerHTML = "";
    category = category.toLowerCase();
    dynamic.filter((e) => {
        return e.type === category;
      }).forEach((e) => {
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = ` <img src="${e.img}" alt="">
        <h1>${e.h1}</h1>
        <p>${e.p}</p>`;
        container.appendChild(box);
      });
  }
}
items();




























// let buttons = [
//   {
//     name: "all",
//     click: "all",
//   },
//   {
//     name: "breakfast",
//     click: "breakfast",
//   },
//   {
//     name: "lunch",
//     click: "lunch",
//   },
//   {
//     name: "dinner",
//     click: "dinner",
//   },
//   {
//     name: "shakes",
//     click: "shakes",
//   },
// ];

// function btnFunction() {
//   buttons.forEach((h) => {
//     let button = document.createElement("button");
//     button.setAttribute("onclick", `${h.click}('${h.click}')`);
//     button.innerHTML = `${h.name}`;
//     document.querySelector(".btns").appendChild(button);
//   });
// }
// btnFunction();