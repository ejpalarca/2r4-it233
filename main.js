document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });
});
