document.addEventListener('DOMContentLoaded', () => {
    loadSocialFeed('instagram-feed', 'https://www.instagram.com/realassets');
    loadSocialFeed('facebook-feed', 'https://www.facebook.com/realassets');
    loadSocialFeed('linkedin-feed', 'https://www.linkedin.com/company/realassets');
    loadSocialFeed('youtube-feed', 'https://www.youtube.com/channel/realassets');
    loadSocialFeed('twitter-feed', 'https://twitter.com/realassets');
});

function loadSocialFeed(elementId, url) {
    const feedContainer = document.getElementById(elementId);
    const iframe = document.createElement('iframe');
    iframe.src = url;
    feedContainer.appendChild(iframe);
}
