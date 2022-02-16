function loadBody() {
    setTimeout(() => {
        document.getElementById("btn1").innerHTML = "Click Here";
        document.getElementById("link1").setAttribute("href", "#ad4");
    }, 5000);
}
function getLink1() {
    document.getElementById("btn2").setAttribute("style", "display:block;");
}