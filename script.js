

// home page responsiveness
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('container-2');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// sproduct javascript
var MainImg = document.getElementById('MainImg');
var small = document.getElementsByClassName('small-img');

    small[0].onclick = function (){
        MainImg.src = small[0].src;
    }
    small[1].onclick = function (){
        MainImg.src = small[1].src;
    }
    small[2].onclick = function (){
        MainImg.src = small[2].src;
    }
    small[3].onclick = function (){
        MainImg.src = small[3].src;
    }




    // login javascript 
    



