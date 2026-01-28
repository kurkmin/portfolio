console.log("successfully linked!");

document.addEventListener('click', () => {
    console.log("clcked!");
});

window.onload = () => {
    const mainHeader = document.querySelector('h1');
    mainHeader.innerText = "deployment successful!";
};