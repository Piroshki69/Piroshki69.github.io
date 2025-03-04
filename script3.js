document.addEventListener("DOMContentLoaded", function () {
    const videos = [
        { src: "./videos/video1.mp4", description: "Ad Campaign 1" },
        { src: "./videos/video2.mp4", description: "Ad Campaign 2" },
        { src: "./videos/video3.mp4", description: "Ad Campaign 3" }
    ];

    const container = document.getElementById("videoContainer");

    videos.forEach(video => {
        const videoWrapper = document.createElement("div");
        videoWrapper.classList.add("video-item");

        // Video Title
        const title = document.createElement("h2");
        title.innerText = video.description;
        videoWrapper.appendChild(title);

        // Video Element
        const videoElement = document.createElement("video");
        videoElement.src = video.src;
        videoElement.controls = true; // Adds play/pause controls
        videoElement.classList.add("video-player");

        // Adjust size dynamically per video
        videoElement.addEventListener("loadedmetadata", () => {
            let videoWidth = videoElement.videoWidth;
            let videoHeight = videoElement.videoHeight;

            // Limit to max 70vw width and 40vh height while keeping aspect ratio
            const maxWidth = window.innerWidth * 0.7;  // 70vw
            const maxHeight = window.innerHeight * 0.4; // 40vh

            // Scale down if necessary
            let widthRatio = maxWidth / videoWidth;
            let heightRatio = maxHeight / videoHeight;
            let scaleFactor = Math.min(widthRatio, heightRatio, 1); // Prevent upscaling

            videoElement.style.width = videoWidth * scaleFactor + "px";
            videoElement.style.height = videoHeight * scaleFactor + "px";
        });

        videoWrapper.appendChild(videoElement);
        container.appendChild(videoWrapper);
    });
});
