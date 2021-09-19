function m() {
    var items = document.getElementsByClassName('m');
    for (var i = 0; i < items.length; i++) {
        items[i].innerHTML = "m";
    }
}

function mclick() {
    document.getElementsByClassName('m').style.background = "yellow";
}
var x

function y(x) {
    var items = document.getElementsByClassName('y');
    var item = items[x - 1].value;

    for (var i = 0; i < items.length; i++) {
        alert(item);
        items[i].innerHTML = item;
    }
    for (var i = 0; i < items.length; i++) {
        items[i].style.background = "none";
    }
}

function yclick() {
    var items = document.getElementsByClassName('y');
    for (var i = 0; i < items.length; i++) {
        items[i].style.background = "yellow";
    }
}