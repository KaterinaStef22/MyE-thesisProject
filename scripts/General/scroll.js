document.getElementsByClassName("nav-link")[1]
.addEventListener("click", () => {
    console.log("Stack Clicked");
    document.getElementById("collapseOne").className="collapse show"
    document.getElementById("collapseTwo").className="collapse"
    document.getElementById("collapseThree").className="collapse"
    document.getElementById("collapseFour").className="collapse"
});

document.getElementsByClassName("nav-link")[2]
.addEventListener("click", () => {
    console.log("Queue Clicked");
    document.getElementById("collapseOne").className="collapse"
    document.getElementById("collapseTwo").className="collapse show"
    document.getElementById("collapseThree").className="collapse"
    document.getElementById("collapseFour").className="collapse"
});

document.getElementsByClassName("nav-link")[3]
.addEventListener("click", () => {
    console.log("Linked List Clicked");
    document.getElementById("collapseOne").className="collapse"
    document.getElementById("collapseTwo").className="collapse"
    document.getElementById("collapseThree").className="collapse show"
    document.getElementById("collapseFour").className="collapse"
});

document.getElementsByClassName("nav-link")[4]
.addEventListener("click", () => {
    console.log("Binary Tree Clicked");
    document.getElementById("collapseOne").className="collapse"
    document.getElementById("collapseTwo").className="collapse"
    document.getElementById("collapseThree").className="collapse"
    document.getElementById("collapseFour").className="collapse show"
});