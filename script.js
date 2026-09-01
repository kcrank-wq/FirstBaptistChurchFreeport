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

   

/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.querySelector("#contactForm");

const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const messageInput =
    document.querySelector("#message");

const nameError =
    document.querySelector("#nameError");

const emailError =
    document.querySelector("#emailError");

const messageError =
    document.querySelector("#messageError");

const formSuccess =
    document.querySelector("#formSuccess");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let formIsValid = true;


    /* Clear old errors */

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");


    /* Check Name */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        nameInput.classList.add("input-error");

        formIsValid = false;
    }


    /* Check Email */

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email address.";

        emailInput.classList.add("input-error");

        formIsValid = false;

    } else if (!emailInput.value.includes("@")) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("input-error");

        formIsValid = false;
    }


    /* Check Message */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter a message or prayer request.";

        messageInput.classList.add("input-error");

        formIsValid = false;
    }


    /* If everything is correct */

    if (formIsValid) {

        formSuccess.textContent =
            "Thank you! Your form has been completed successfully.";

        contactForm.reset();
    }

})

/* =========================================
   CLEAR FORM ERRORS
========================================= */

nameInput.addEventListener("input", function () {

    if (nameInput.value.trim() !== "") {

        nameError.textContent = "";

        nameInput.classList.remove(
            "input-error"
        );

    }

});


emailInput.addEventListener("input", function () {

    if (
        emailInput.value.trim() !== "" &&
        emailInput.value.includes("@")
    ) {

        emailError.textContent = "";

        emailInput.classList.remove(
            "input-error"
        );

    }

});


messageInput.addEventListener("input", function () {

    if (messageInput.value.trim() !== "") {

        messageError.textContent = "";

        messageInput.classList.remove(
            "input-error"
        );

    }

});


/* =========================================
   INPUT STYLE CHANGE
========================================= */

const prayerInput =
    document.querySelector("#prayerInput");


prayerInput.addEventListener("input", function () {

    if (prayerInput.value.trim() !== "") {

        prayerInput.classList.add(
            "typing"
        );

    } else {

        prayerInput.classList.remove(
            "typing"
        );

    }

});

/* =========================================
   DYNAMIC PRAYER LIST
========================================= */

const addPrayerButton =
    document.querySelector("#addPrayerButton");

const prayerList =
    document.querySelector("#prayerList");

const prayerError =
    document.querySelector("#prayerError");


addPrayerButton.addEventListener(
    "click",
    function () {

        const prayerText =
            prayerInput.value.trim();


        /* Do not add an empty request */

        if (prayerText === "") {

            prayerError.textContent =
                "Please type a prayer request first.";

            return;
        }


        prayerError.textContent = "";


        /* Create new list item */

        const newPrayer =
            document.createElement("li");


        /* Create text */

        const requestText =
            document.createElement("span");

        requestText.textContent =
            prayerText;


        /* Create remove button */

        const removeButton =
            document.createElement("button");

        removeButton.textContent =
            "Remove";

        removeButton.classList.add(
            "remove-prayer"
        );

        removeButton.setAttribute(
            "type",
            "button"
        );


        /* Remove prayer request */

        removeButton.addEventListener(
            "click",
            function () {

                newPrayer.remove();

            }
        );


        /* Add everything to the page */

        newPrayer.appendChild(
            requestText
        );

        newPrayer.appendChild(
            removeButton
        );

        prayerList.appendChild(
            newPrayer
        );


        /* Clear input */

        prayerInput.value = "";

        prayerInput.classList.remove(
            "typing"
        );

        prayerInput.focus();

    }
);






