/*Stickybar Fun*/
// When the user scrolls the page, execute stickyBar 
window.onscroll = function () {stickyBar()};

// Get the navbar
var navigation = document.getElementById("stickynav");

// Get the offset position of the navbar
var sticky = navigation.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyBar() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky")
    } else {
        navigation.classList.remove("sticky");
    }
}

/*Accordion Fun */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

/*Javascript for Typerwriter effect */
var i = 0;
var txt = 'Hello, my name is Corbet. I study User Experience Research and Design.'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}
