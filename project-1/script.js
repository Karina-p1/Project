
// var swiper = new Swiper(".room-slider", {
//     spaceBetween: 20,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         991: {
//             slidesPerView: 3,
//         },
//     },
// });

// Select the element with the class "card-slider"
const cardSlider = document.querySelector(".card-slider");

// Initialize a variable to keep track of the current card index
let cardIndex = 0;

// Define a function to change the currently displayed card
function changeCard(direction) {
    // Update the card index based on the desired direction (positive or negative)
    cardIndex = Math.max(0, Math.min(cardIndex + direction, cardSlider.children.length - 1));
    
    // Get the width of a single card within the slider
    const cardWidth = cardSlider.offsetWidth;

    // Translate the card slider container horizontally to display the desired card
    cardSlider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;

    // Enable or disable the "Next" button based on the card index
    document.querySelector(".next-button").disabled = cardIndex >= cardSlider.children.length - 1;

    // Enable or disable the "Previous" button based on the card index
    document.querySelector(".prev-button").disabled = cardIndex <= 0;
}
