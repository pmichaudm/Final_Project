// document.addEventListener("DOMContentLoaded", () => {
//     const menuCards = document.querySelectorAll(".menu-card");
//     menuCards.forEach(menuCard => {
//         const image = menuCard.querySelector(".menu-item-image img")
//         const imageSrc = image.getAttribute("src")
//         menuCard.addEventListener('click', () => {
//             console.log(imageSrc);
//             showPopup(imageSrc);
//         });
//     });
//
//     function showPopup(imageSrc) {
//         const popup = document.createElement('div');
//         popup.classList.add('popup');
//         popup.innerHTML = `
//                     <div class="popup-image">
//                       <img src="${imageSrc}" alt="">
//                       <i class="fa-solid fa-xmark" onclick="hidePopup(this.parentNode.parentNode)"></i>
//                     </div>
//                   `;
//         document.body.appendChild(popup);
//     }
//
// });
// function hidePopup(popup) {
//     if (popup) {
//         popup.parentNode.removeChild(popup);
//     }
// }
function showPopup(imageSrc) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
    <div class="popup-image">
      <img src="${imageSrc}" alt="">
      <i class="fa-solid fa-xmark" onclick="hidePopup()"></i>
    </div>
  `;
    document.body.appendChild(popup);
}

function hidePopup() {
    var popup = document.querySelector(".popup");
    if (popup) {
        popup.parentNode.removeChild(popup);
        document.body.style.overflow = "auto";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuCards = document.querySelectorAll(".menu-card");
    menuCards.forEach(menuCard => {
        const image = menuCard.querySelector(".menu-item-image img")
        const imageSrc = image.getAttribute("src")
        menuCard.addEventListener('click', () => {
            console.log(imageSrc);
            showPopup(imageSrc);
        });
    });
});