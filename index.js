var x

function m() {
    var items = document.getElementsByClassName('m');
    for (var i = 0; i < items.length; i++) {
        items[i].innerHTML = "m";
    }
}




function y(x) {
    var items = document.getElementsByClassName('y');
    var item = items[x - 1].value;

    for (var i = 0; i < items.length; i++) {
        alert(item);
        items[i].value = item;
    }
    for (var i = 0; i < items.length; i++) {
        items[i].style.background = "none";
    }
}