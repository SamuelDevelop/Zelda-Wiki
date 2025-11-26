const GIFS = [
    "images/link_gifs/link_yes.gif",
    "images/link_gifs/figth_link.gif",
    "images/link_gifs/mini_link.gif",
    "images/link_gifs/normal_link.gif",
]

let indice = 0;
function carrocel(){
    indice = (indice + 1) % GIFS.length;
    toogleMainImage(GIFS[indice]);
}

setInterval(carrocel, 1000);

