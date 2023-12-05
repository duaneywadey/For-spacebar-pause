// Find the YouTube video player element
const videoPlayer = document.querySelector('.video-stream.html5-main-video');

// Add an event listener to the document for the keydown event
document.addEventListener('keydown', (event) => {
  // Check if the key pressed is the space bar
  if (event.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
    // Prevent the default behavior of the space key
    event.preventDefault();

    // Pause or play the video
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  }
});
