let searchBtn = document.querySelector("search-btn");
let searchform = document.querySelector(".search-form");
let span =document.querySelector('.up')
window.onscroll = function() {
    if (this.scrollY >= 1000) {
    span.classList.add('show');
}else {
        span.classList.remove('show');

    }
}
function showbar(){
    searchBtn.classList.toggle("fa-times-circle");
};

span.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
};