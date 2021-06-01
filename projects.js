"use strict";

$(function () {
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
      $(curr).hide(100);
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
      if (window.innerWidth <= 900) {
        curr.style.display = "flex";
      } else {
        $(curr).slideUp(700);
      }
    });
  };

  $("#select").change(function () {
    let value = document.querySelector("#select").value;
    if (value == "react") {
    
      if (window.innerWidth <= 900) {
        card.forEach((curr) => {
          curr.style.display = "none";
        });
      } else {
        card.forEach((curr) => {
          $(curr).slideDown(700);
        })
        addCards("games")
      }

    } else if (value == "game") {
console.log('click')
      if (window.innerWidth <= 900) {
        card.forEach((curr) => {
          curr.style.display = "none";
        });
      } else {
        card.forEach((curr) => {
          $(curr).slideDown(700);
        });
        addCards("react");

      }

    } else if (value == "all") {
      if (window.innerWidth <= 900) {
        card.forEach((curr) => {
          curr.style.display = "flex";
        });
      } else {
        card.forEach((curr) => {
          $(curr).slideDown(700);
        });
      }
    }
  });

  removeCards("games");
});

