// PORTFOLIO JAVASCRIPT
// Muhammad Mudassar

// =========================================

// DOM ELEMENTS

const navbar =
    document.querySelector(".navbar");

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".navbar ul li a"
    );

const cards =
    document.querySelectorAll(
        ".project-card"
    );

const contactForm =
    document.getElementById(
        "contact-form"
    );


// =========================================
// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.20)";
    }

    else {

        navbar.style.boxShadow =
            "none";
    }

});


// =========================================
// SCROLL REVEAL ANIMATION

function revealSections() {

    sections.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const revealPoint =
            window.innerHeight - 120;

        if (sectionTop < revealPoint) {

            section.classList.add("show");
        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


// =========================================
// ACTIVE NAVIGATION LINK

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

});


// =========================================
// PROJECT CARD HOVER EFFECT

cards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});

// =========================================
// CONTACT FORM (EMAILJS)

emailjs.init(
    "BY7lgTZmhGZT_pQfz"
);

if (contactForm) {

    contactForm.addEventListener(

        "submit",

        function (e) {

            e.preventDefault();

            emailjs.sendForm(

                "service_9y3nxz1",

                "template_dj12jo9",

                this

            )

                .then(() => {

                    alert(
                        "Thank you! Your message has been sent successfully."
                    );

                    contactForm.reset();

                })

                .catch((error) => {

                    console.log(error);

                    alert(
                        "Something went wrong."
                    );

                });

        }

    );

}