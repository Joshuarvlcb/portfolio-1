"use strict";

$(function (){


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
   $(curr).slideUp(700)
});
};

$('#select').change(function(){
   let value = document.querySelector("#select").value;
   if (value == "css") {
      card.forEach((curr) => {
         $(curr).slideDown(1000)
       });     addCards("css");
   } else if (value == "js") {
      card.forEach((curr) => {
         $(curr).slideDown(1000)
       });     addCards("js");
   }
 })
})

