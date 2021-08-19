var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 160 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// toggle menu

const btnHamburger = document.getElementById('btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const menuHome = document.querySelector('#menuHome');
const menuAbout = document.querySelector('#menuAbout');
const menuServices = document.querySelector('#menuServices');
const menuSeo = document.querySelector('#menuSeo');
const menuContact = document.querySelector('#menuContact');

btnHamburger.addEventListener('click',function(){

    if(header.classList.contains('open')){ // Close Menu
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }
    else{ //Open Menu
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
});

menuHome.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});

menuAbout.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});

menuServices.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});

menuSeo.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});

menuContact.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});
