import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

class VimeoPlayer {

    iframe = document.querySelector('iframe');
    player = new Player(this.iframe);
    timeToPlay = localStorage.getItem("videoplayer-current-time");
    

    start() {
        this.startTime()
        this.newPlayTime()
    }

    startTime() {this.player.on('timeupdate', throttle(this.playOn, 1000))}
    
    playOn({seconds}) {
        const currentTime = seconds;
        localStorage.setItem("videoplayer-current-time", currentTime);
    }
    
    newPlayTime() {
        this.player.setCurrentTime(this.timeToPlay).then(() => {    
            this.player.play()
        }).catch(function(error) {    
            switch (error.name) {        
                case 'RangeError':         
                console.log('the time was less than 0 or greater than the video’s duration')   
                break;
                
                default:
                console.log('some other error occurred')
                break;
            }
        });}
}

new VimeoPlayer().start();