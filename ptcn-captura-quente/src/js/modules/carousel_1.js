const carousels = document.querySelectorAll("[data-component='carousel']");
for (const carousel_container of carousels) {
    let button = carousel_container.querySelectorAll("[data-carousel='buttons'] button");
    let carousel = carousel_container.querySelector("ul");
    let tilesArray = Array.from(carousel.children);
    let tiles = carousel.children;

    let center = (tilesArray.findIndex((e) => e.offsetLeft = window.innerWidth/2 - e.clientWidth/2 && e.offsetLeft > 0)) + 1;
    
    const gotoPrev = () => {
        carousel.insertBefore(tiles[tiles.length - 1].cloneNode(true), tiles[0]);
        tiles[tiles.length - 1].remove();
    };
    const gotoNext = () => {
        carousel.appendChild(tiles[0].cloneNode(true));
        tiles[0].remove();
    };
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => { i == 0 ? gotoPrev() : gotoNext(); });
    }

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundImage = `url(public/img/aulas/capa_${i+1}.png)`
    }

}