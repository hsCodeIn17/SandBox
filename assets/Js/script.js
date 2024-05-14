document.querySelector("#menu").addEventListener("click", function () {
    document.querySelector("nav").style.display = "block";
})
document.querySelector("#close").addEventListener("click", function () {
    document.querySelector("nav").style.display = "none";
})
document.querySelector(".arrow-button>a").addEventListener("click", function () {
    document.querySelector(".bx-up-arrow-circle").style.display = "none";
    document.querySelector(".bx-down-arrow-circle").style.display = "block";
})
document.querySelector(".bx-down-arrow-circle").addEventListener("click", function () {
    document.querySelector(".bx-up-arrow-circle").style.display = "block";
    document.querySelector(".bx-down-arrow-circle").style.display = "none";
})
// Keep track of the currently displayed index
var currentlyDisplayedIndex = -1;

document.querySelectorAll(".drop-open").forEach(function (dropOpen, index) {
    dropOpen.addEventListener("click", function () {
        var dropDowns = document.querySelectorAll(".DropDown");

        // Hide the currently displayed .DropDown if any
        if (currentlyDisplayedIndex !== -1) {
            dropDowns[currentlyDisplayedIndex].classList.remove("display-block");
        }

        // If clicking on the same .drop-open element, toggle the visibility
        if (index === currentlyDisplayedIndex) {
            currentlyDisplayedIndex = -1;  // Reset the currently displayed index
        } else {
            // Otherwise, show the corresponding .DropDown element
            dropDowns[index].classList.add("display-block");
            currentlyDisplayedIndex = index;
        }
    });
});




