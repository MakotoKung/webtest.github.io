var intro = document.getElementById('intro');
var main = document.getElementById('main');
var color = document.getElementById('color');
var left = document.getElementById('left ');
var right = document.getElementById('right');

window.onload = function(){
    setTimeout(function(){
        intro.classList.add('op0')
    },5000)
    setTimeout(function(){
        main.classList.add('main')
        main.classList.remove('op0')
    },5000)
    setTimeout(function(){
        color.classList.add('color')
        color.classList.remove('lightblue')
    },5000)
    setTimeout(function(){
        left.classList.add('left')
        right.classList.add('right')
    },5500)
}