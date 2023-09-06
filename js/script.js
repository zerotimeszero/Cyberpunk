
let imageCounter = 1;
function changeBg(){
    const images = [
        'url(img/1.jpg)',
        'url(img/2.jpg)',
        'url(img/3.png)',
    ]
    const heroSection = document.getElementById("hero");
    const bg = images[imageCounter];
    heroSection.style.backgroundImage = bg;
    imageCounter == 2 ? imageCounter = 0 : imageCounter++;

}
function addActive(){
    var element = document.getElementById('check-box');
    element.classList.contains("active") ? element.classList.remove("active") : element.classList.add("active");
    
}

setInterval(changeBg,3000);