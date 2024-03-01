function playVideo(videoUrl) {
    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.muted = true;

    // Full-screen functionality
    videoElement.addEventListener('click', () => {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { /* Firefox */
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
            videoElement.msRequestFullscreen();
        }
    });

    document.body.appendChild(videoElement);
}
