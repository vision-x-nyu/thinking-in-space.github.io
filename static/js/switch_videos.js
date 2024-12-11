function switchVideo(prefix, videoContainerId, preview_id) {
    var totalVideos = 8;

    // Hide all video containers and pause their videos
    for (var i = 1; i <= totalVideos; i++) {
        var container = document.getElementById(prefix + 'video' + i + 'Container');
        if (container) {
            container.style.display = 'none';
            var vids = container.getElementsByTagName('video');
            for (var j = 0; j < vids.length; j++) {
                vids[j].pause();
            }
        }
    }

    // Show the selected video container
    var selectedVideoContainer = document.getElementById(prefix + videoContainerId);
    if (selectedVideoContainer) {
        selectedVideoContainer.style.display = 'block';
    }

    // Update preview images: remove active class from all previews
    for (var i = 1; i <= totalVideos; i++) {
        var preview = document.getElementById(prefix + 'video' + i + 'Preview');
        if (preview) {
            preview.className = preview.className.replace(" preview-video-active", "");
        }
    }

    // Add active class to the selected preview
    var selectedPreview = document.getElementById(prefix + preview_id);
    if (selectedPreview) {
        selectedPreview.className += " preview-video-active";
    }
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVideoVisibility() {
    var videos = document.querySelectorAll('.auto-video');
    videos.forEach(function(video) {
        // Check if the video is in the viewport
        if (isElementInViewport(video)) {
            if (video.paused) {
                video.currentTime = 0; // Reset to start
                video.play();
            }
        } else {
            video.pause();
        }
    });
}

window.addEventListener('scroll', checkVideoVisibility);

document.addEventListener("DOMContentLoaded", function() {
    // Get all video elements with class 'video-music'
    var videos = document.querySelectorAll('.video-music');

    // Loop through each video and set the volume
    videos.forEach(function(video) {
        video.volume = 0.25; // 25% volume
    });
});
