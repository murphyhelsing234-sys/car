```javascript
// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// Close menu after clicking a link

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


// =========================
// SEARCH
// =========================

const searchBtn = document.getElementById("searchBtn");

const searchBox = document.getElementById("searchBox");

const closeSearch = document.getElementById("closeSearch");

const searchInput = document.getElementById("searchInput");


searchBtn.addEventListener("click", () => {

    searchBox.classList.add("show");

    searchInput.focus();

});


closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("show");

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        searchBox.classList.remove("show");

    }

});


// =========================
// VEHICLE FILTER
// =========================

const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".car-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active from all buttons

        filters.forEach(button => {

            button.classList.remove("active");

        });


        // Activate selected button

        filter.classList.add("active");


        const category =
            filter.dataset.filter;


        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category.includes(category)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// =========================
// VEHICLE SEARCH
// =========================

searchInput.addEventListener("input", () => {

    const search =
        searchInput.value
        .toLowerCase()
        .trim();


    cards.forEach(card => {

        const carName =
            card.querySelector("h3")
            .textContent
            .toLowerCase();


        if (carName.includes(search)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});
```
