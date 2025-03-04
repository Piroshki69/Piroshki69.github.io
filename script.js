document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // List of images with descriptions
    const images = [
        { src: "./Featured/photo1.jpg", description: "Sunset Over Mountain, APU" },
        { src: "./Featured/photo2.jpg", description: "City Lights at Night, APU" },
        { src: "./Featured/photo3.jpg", description: "Waves Crashing on Shore, APU" }
    ];

    // Loop through images and add them to the gallery
    images.forEach(img => {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const text = document.createElement("p");
        text.textContent = img.description;
        text.classList.add("image-title");

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.description;
        image.classList.add("image-style");

        container.appendChild(text);
        container.appendChild(image);
        gallery.appendChild(container);
    });
});
