"use strict";

// const options = document.getElementsByClassName('select')

//     Array.from(options).forEach(option => {
//         option.addEventListener('onChange',(e) => {
//             console.log('hu')
//         })
//         console.log(option)
//     })

document.querySelector("#select").addEventListener("onchange", myFunction);

console.log(document.querySelector("#select"));

const cards = document.getElementsByClassName("flex");

const card = Array.from(cards).map((card) => {
  return card;
});

const removeCards = (remove) => {
  const remover = card.filter((curr) => {
    let id;
    curr.classList.forEach((currClassList) => {
      currClassList == remove ? (id = curr) : (id = null);
    });
    if (id != null) return id;
  });

  remover.forEach((curr) => {
    curr.style.display = "none";
  });
};
const addCards = (addCards) => {
  const add = card.filter((curr) => {
    let id;
    curr.classList.forEach((currClassList) => {
      currClassList == addCards ? (id = curr) : (id = null);
    });
    if (id != null) return id;
  });
  add.forEach((curr) => {
    curr.style.display = "flex";
  });
};
function myFunction() {
  let value = document.querySelector("#select").value;
  if (value == "css") {
    removeCards("js");
    addCards("css");
  } else if (value == "js") {
    removeCards("css");
    addCards("js");
  }
}
