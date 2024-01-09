window.onscroll = function() {scrollFunction()};
const BlockImageUp1 = document.getElementById('blockImages__down__opis__up1');
const ImageBlockUp1 = document.getElementById('blockImages__1');
const ImageBlockLine1 = document.getElementsByClassName('blockImage__line')[0];

ImageBlockUp1.addEventListener('mouseover', function handleMouseOver() {
    BlockImageUp1.style.top = '70%';
    ImageBlockLine1.style.width = '94%';
});

ImageBlockUp1.addEventListener('mouseout', function handleMouseOut() {
    BlockImageUp1.style.top = '85%';
    ImageBlockLine1.style.width = '3%';
    
});

//--------------

const BlockImageUp2 = document.getElementById('blockImages__down__opis__up2');
const ImageBlockUp2 = document.getElementById('blockImages__2');
const ImageBlockLine2 = document.getElementsByClassName('blockImage__line')[1];


ImageBlockUp2.addEventListener('mouseover', function handleMouseOver() {
    ImageBlockLine2.style.width = '94%';
    BlockImageUp2.style.top = '70%';
});

ImageBlockUp2.addEventListener('mouseout', function handleMouseOut() {
    ImageBlockLine2.style.width = '3%';
    BlockImageUp2.style.top = '85%';
});

//--------------

const BlockImageDown1 = document.getElementById('blockImages__down__opis__down1');
const ImageBlockDown1 = document.getElementById('blockImages__3');
const ImageBlockLine3 = document.getElementsByClassName('blockImage__line')[2];

ImageBlockDown1.addEventListener('mouseover', function handleMouseOver() {
    ImageBlockLine3.style.width = '94%';
    BlockImageDown1.style.top = '60%';
});

ImageBlockDown1.addEventListener('mouseout', function handleMouseOut() {
    ImageBlockLine3.style.width = '3%';
    BlockImageDown1.style.top = '75%';
});

//--------------

const BlockImageDown2 = document.getElementById('blockImages__down__opis__down2');
const ImageBlockDown2 = document.getElementById('blockImages__4');
const ImageBlockLine4 = document.getElementsByClassName('blockImage__line')[3];

ImageBlockDown2.addEventListener('mouseover', function handleMouseOver() {
    ImageBlockLine4.style.width = '94%';
    BlockImageDown2.style.top = '60%';
});

ImageBlockDown2.addEventListener('mouseout', function handleMouseOut() {
    ImageBlockLine4.style.width = '3%';
    BlockImageDown2.style.top = '75%';
});

//--------------

const BlockImageDown3 = document.getElementById('blockImages__down__opis__down3');
const ImageBlockDown3 = document.getElementById('blockImages__5');
const ImageBlockLine5 = document.getElementsByClassName('blockImage__line')[4];

ImageBlockDown3.addEventListener('mouseover', function handleMouseOver() {
    ImageBlockLine5.style.width = '94%';
    BlockImageDown3.style.top = '60%';
});

ImageBlockDown3.addEventListener('mouseout', function handleMouseOut() {
    BlockImageDown3.style.top = '75%';
    ImageBlockLine5.style.width = '3%';
});


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav").style.position = "fixed"
    document.getElementById("nav").style.backgroundColor = " rgba(49, 49, 49, 0.753)"
    document.getElementById("nav").style.zIndex = "10"
    document.getElementById("logo").style.height = "70px"
    document.getElementById("logo").style.width = "70px"
    document.getElementById("nav__per__row").style.fontSize = "18px"
} else {
    document.getElementById("nav").style.position = "absolute"
    document.getElementById("nav").style.backgroundColor = "transparent"
    document.getElementById("logo").style.height = "100px"
    document.getElementById("logo").style.width = "100px"
    document.getElementById("nav__per__row").style.fontSize = "22px"
    }
}