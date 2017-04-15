
function animationChange() {
    var button = document.getElementById('buttonTester');
    window.setTimeout(buttonText, 366);

    if (button.style.animationName == 'none') {
        button.style.animationName = 'forwardsMove';
        window.setTimeout(hideText, 700);
    }
    else if (button.style.animationName == 'forwardsMove') {
        button.style.animationName = 'backwardsMove';
        window.setTimeout(hideText, 250);
        window.setTimeout(reset, 1200);
    }
}

//Sub methods
function reset() {
    var button = document.getElementById('buttonTester');
    button.style.animationDirection = 'normal';
    button.style.animationFillMode = 'forwards';
    button.style.animationName = 'none';

}
function buttonText() {
    var plus = document.getElementById('plus')
    if (plus.style.display == 'none') {
        plus.style.display = 'block';
    } else if(plus.style.display == 'block'){
        plus.style.display = 'none';
    }
}
function hideText() {
    var innerText = document.getElementById('innerText');
    if (innerText.style.display == 'none') {
        innerText.style.display = 'block';
    } else if (innerText.style.display !== 'none') {
        innerText.style.display = 'none';
    }
}