const data = [
  {
    lot: "tb",
    title: "TeleBingo",
    text: "Самая популярная лотерея в Казахстане! Еженедельные розыгрыши крупных сумм Bingo и огромного SuperBingo, делают «TeleBingo» по-настоящему любимой лотереей, которую ждут, участвуют и смотрят всей семьей.",
  },
  {
    lot: "bt",
    title: "BingoToy",
    text: "Самая популярная лотерея в Казахстане! Еженедельные розыгрыши крупных сумм Bingo и огромного SuperBingo, делают «BingoToy» по-настоящему любимой лотереей, которую ждут, участвуют и смотрят всей семьей.",
  },
  {
    lot: "se",
    title: "Something Else",
    text: "Самая популярная лотерея в Казахстане! Еженедельные розыгрыши крупных сумм Bingo и огромного SuperBingo, делают «Something Else» по-настоящему любимой лотереей, которую ждут, участвуют и смотрят всей семьей.",
  },
  {
    lot: "m",
    title: "More",
    text: "Самая популярная лотерея в Казахстане! Еженедельные розыгрыши крупных сумм Bingo и огромного SuperBingo, делают «More» по-настоящему любимой лотереей, которую ждут, участвуют и смотрят всей семьей.",
  },
];

const popup = document.querySelector(".popup-content");
const overlay = document.querySelector(".overlay");
const btnClosePopup = document.querySelector(".btn--close-popup");
const btnsOpenModal = document.querySelector(".btn--show-modal");
const body = document.querySelector("body");

//////////////////////////////////////////////////////////////////////////
// Modal window

const openModal = function () {
  console.log("Works");
  //   popup.classList.remove("hidden");
  //   overlay.classList.remove("hidden");
  body.style.overflowY = "hidden";
  if (header) {
    header.style.zIndex = "1";
  }
};

const closePopup = function () {
  popup.classList.add("hidden");
  //   overlay.classList.add("hidden");
  body.style.overflowY = "initial";
};

btnsOpenModal.addEventListener("click", () => {
  console.log("Button clicked!");
  openModal();
});

btnClosePopup.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});

//////////////////////////////////////////////////////////////////////////
// Tabbed component

const tabs = document.querySelectorAll(".grid-item");
const tabsContainer = document.querySelectorAll(".grid-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.forEach(container => {
  container.addEventListener("click", function (e) {
    const mod = document.querySelector(".mod");
    mod.innerHTML = "";

    const clicked = e.target.closest(".grid-item");

    if (!clicked) return;

    tabs.forEach(t => t.classList.remove("btn--show-modal"));
    tabsContent.forEach(c => c.classList.remove("operations__content--active"));
    // popup.classList.add("hidden");

    clicked.classList.add("btn--show-modal");

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });
});

// const filteredData = data.filter(d => clicked.dataset.tab === d.lot);

// filteredData.forEach(d => {
//   const html = `
//       <div class="popup-content popup__content-${d.lot}">
//         <div class="popup-inner">
//           <button class="btn--close-popup">&times;</button>
//           <div class="popup__pic">
//             <picture>
//               <img src="./img/classic/tb-pp.png" srcset="./img/classic/tb-ppx2.png 2x" alt=" " />
//             </picture>
//           </div>
//           <div class="popup__description">
//             <h3>${d.title}</h3>
//             <p>${d.text}</p>
//             <a href="/profile?promocode=INDP10ALL">
//               <button class="popup__btn">купить билет</button>
//             </a>
//             <a href="/profile?promocode=INDP10ALL">
//               <button class="popup__btn popup__btn2">
//                 <img src="./img/download-icon.svg" alt="" />
//                 <p>Правила лотереи</p>
//               </button>
//             </a>
//           </div>
//         </div>
//         <div class="overlay"></div>
//       </div>
//     `;

//   mod.insertAdjacentHTML("beforeend", html);
// });
