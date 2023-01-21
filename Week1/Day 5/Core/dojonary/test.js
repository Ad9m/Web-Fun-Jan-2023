function log(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
function likes() {
    alert("Ninja was liked");
}
function remove(element){
    element.remove();

}
