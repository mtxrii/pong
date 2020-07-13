function showTooltip() {
    let popup = document.getElementById("tooltip");
    popup.classList.toggle("show", true);
}

function hideTooltip() {
    let popup = document.getElementById("tooltip");
    popup.classList.toggle("show", false);
}

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

async function paint(newColor) {
    net.color      = newColor;
    player.color   = newColor;
    opponent.color = newColor;

    document.body.style.backgroundColor = newColor;
}

async function score(color) {
    const white = "#FFF";

    paint(color);
    await sleep(1000);
    paint(white);

}