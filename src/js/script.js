console.log("successfully linked!");

document.addEventListener('click', () => {
    console.log("clcked!");
});

document.addEventListener('DOMContentLoaded', () => {
    const visCo2FlyLink = document.querySelector('#vis-co2-fly-link');
    visCo2FlyLink.innerText = "vis-co2-fly.com";
});

window.onload = () => {
    const mainHeader = document.querySelector('#title');
    mainHeader.innerText = "deployment successful!";
};

