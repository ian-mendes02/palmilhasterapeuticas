const carousels = document.querySelectorAll("[data-component='carousel']");
for (const carousel_container of carousels) {
    let button = carousel_container.querySelectorAll("[data-carousel='buttons'] button");
    let carousel = carousel_container.querySelector("ul");
    const tiles = Array.from(carousel.children);
    /* const tileWidth = tiles[0].clientWidth; */
    const half =  Math.round(tiles.length/5);

    function gotoPrev() {
        let tiles = Array.from(carousel.children);
        let nodes = tiles.slice(-(half))
        for (let j = 1; j < nodes.length; j++) {
            carousel.insertBefore(nodes[j].cloneNode(true), carousel.firstElementChild);
            tiles[tiles.length-j].remove();
        };
    };
    function gotoNext() {
        let tiles = Array.from(carousel.children);
        let nodes = tiles.slice(0, half);
        for (let j = 0; j < nodes.length; j++) {
            carousel.appendChild(tiles[j].cloneNode(true));
            tiles[j].remove();
        };
    };

    function goTo(i) {
        i == 0 ? gotoPrev() : gotoNext();
/*         let middle = 1 + carousel.children.length/2;
        carousel.children[middle].scrollIntoView({behavior: 'smooth', inline: 'center'}) */
    }

/*     for (let j = 0; j < tiles.length; j++) {
        tiles[j].style.left = (tiles[j].clientWidth + 24) * j + "px"
    }; */

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => goTo(i));
    }

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundImage = `url(public/img/aulas/capa_${i+1}.png)`
    }

}