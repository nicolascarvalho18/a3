
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

const filterCards = (c) => {
    document.querySelector(".filter-buttons .active").classList.remove("active");
    c.target.classList.add("active");

    filterableCards.forEach(card => {
        if(c.target.dataset.filter === "all" || card.dataset.name === c.target.dataset.filter ) {
            return card.classList.replace("fcard-hide", "fcard-show");
        }
        card.classList.add("fcard-hide");
    });
}

function redirectTo(url) {
    window.location.href = url;
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

filterableCards.forEach(card => {
    card.addEventListener('click', () => {
        var url = card.getAttribute('data-url');
        redirectTo(url);
    });
});

