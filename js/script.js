// Create a new list item when clicking on the "Add" button
function newElement() {
    var p = document.createElement("p");
    var inputValue = document.getElementById("inpt").value;
    var t = document.createTextNode(inputValue);
    p.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(p);
    }
    document.getElementById("inpt").value = "";

    // Create a "close" button and append it to each list item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.style.cursor = "pointer"
    span.style.color = "rgb(54, 96, 123)"
    span.style.fontSize = "32px"
    span.className = "close";
    span.appendChild(txt);
    p.appendChild(span);


    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}