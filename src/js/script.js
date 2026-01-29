console.log("successfully linked!");

document.addEventListener('click', () => {
    console.log("clcked!");
});

window.onload = () => {
    const mainHeader = document.querySelector('#title');
    mainHeader.innerText = "deployment successful!";
};

window.onload = () => {
    const visCo2FlyLink = document.querySelector('#vis-co2-fly-link')
    visCo2FlyLink.innerText = "vis-co2-fly.com"
}