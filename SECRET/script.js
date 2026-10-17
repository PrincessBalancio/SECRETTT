
function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
