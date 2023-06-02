import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime).then(function(seconds) {
    }).catch(function(error) {
    });
}

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

player.on('play', function() {
});

player.getVideoTitle().then(function(title) {
});
