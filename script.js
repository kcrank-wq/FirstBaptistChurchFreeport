// Select the mobile menu button
const menuButton =
    document.querySelector(".menu-button");

// Select the navigation menu
const navigation =
    document.querySelector(".main-nav");


// Open and close the mobile navigation menu
menuButton.addEventListener("click", function () {

    const menuIsOpen =
        navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


// Close the mobile menu after a link is clicked
document
    .querySelectorAll(".main-nav a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


// Automatically display the current year
const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


// Create the scroll animation
const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


// Apply the animation to every reveal element
document
    .querySelectorAll(".reveal")
    .forEach(function (element) {

        observer.observe(element);

    });
