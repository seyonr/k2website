function aboutScroll() {
    const about_scroll = document.querySelector('.about');
    about_scroll.scrollIntoView({ behavior: 'smooth' });
}

function servicesScroll(){
    const serv_scroll = document.querySelector(".services");
    serv_scroll.scrollIntoView({ behavior: 'smooth' });
}

function shopScroll(){
    const shop_scroll = document.querySelector(".shop");
    shop_scroll.scrollIntoView({ behavior: 'smooth' });
}
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
const serv_gd = document.getElementById("serv-gd");
const ulElement_gd = serv_gd.querySelector('ul');
serv_gd.addEventListener("mouseover", function(event) {
    serv_gd.style.backgroundColor = "#E6E6E6";
    serv_gd.style.color = "black";
    ulElement_gd.style.display = 'block';
    setTimeout(() => {
        ulElement_gd.style.opacity = '1';
    }, 200);
});

serv_gd.addEventListener("mouseout", function(event) {
    serv_gd.style.backgroundColor = "black";
    serv_gd.style.color = "white";
    serv_gd.querySelector('ul').style.display = 'none';
});
// ----------------------------------------------------
// ----------------------------------------------------
const serv_vp = document.getElementById("serv-vp");
const ulElement_vp = serv_vp.querySelector('ul');
serv_vp.addEventListener("mouseover", function(event) {
    serv_vp.style.backgroundColor = "#E6E6E6";
    serv_vp.style.color = "black";
    ulElement_vp.style.display = 'block';
    setTimeout(() => {
        ulElement_vp.style.opacity = '1';
    }, 200);
});

serv_vp.addEventListener("mouseout", function(event) {
    serv_vp.style.backgroundColor = "black";
    serv_vp.style.color = "white";
    serv_vp.querySelector('ul').style.display = 'none';
});
// ----------------------------------------------------
// ----------------------------------------------------
const serv_p = document.getElementById("serv-p");
const ulElement_p = serv_p.querySelector('ul');
serv_p.addEventListener("mouseover", function(event) {
    serv_p.style.backgroundColor = "#E6E6E6";
    serv_p.style.color = "black";
    ulElement_p.style.display = 'block';
    setTimeout(() => {
        ulElement_p.style.opacity = '1';
    }, 200);
});

serv_p.addEventListener("mouseout", function(event) {
    serv_p.style.backgroundColor = "black";
    serv_p.style.color = "white";
    serv_p.querySelector('ul').style.display = 'none';
});
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
const shopImgElements = document.querySelectorAll(".shop-img");

shopImgElements.forEach(function(shopImg) {
    const normalImg = shopImg.querySelector("img");
    const hoverImg = shopImg.querySelector(".shop-img-hover");

    shopImg.addEventListener("mouseover", function(event) {
        normalImg.style.display = "none";
        hoverImg.style.display = "block";
        this.style.backgroundColor = "black";
    });

    shopImg.addEventListener("mouseout", function(event) {
        normalImg.style.display = "block";
        hoverImg.style.display = "none";
        this.style.backgroundColor = "white";
    });
});









