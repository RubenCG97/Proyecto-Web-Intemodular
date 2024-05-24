
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoList = document.getElementById('videoList');
    const videos = videoList.getElementsByTagName('li');


    for (let i = 0; i < videos.length; i++) {
        videos[i].addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            videoSource.setAttribute('src', src);
            videoPlayer.load();
            videoPlayer.play();
            highlightCurrentVideo(this);
        });
    }


    function highlightCurrentVideo(currentVideo) {
        for (let i = 0; i < videos.length; i++) {
            videos[i].classList.remove('active');
        }
        currentVideo.classList.add('active');
    }


    if (videos.length > 0) {
        videos[0].click();
    }
});
