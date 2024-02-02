// Get references to the audio element and the seek bar
const audioPlayer = document.querySelector('.audio');
const seekBar = document.getElementById('seek-slider');

// Get references to the play, pause, previous, and next buttons
const playButton = document.getElementById("play");
// const pauseButton = document.querySelector('.audiobuttons img[src="img/pause.svg"]');
const previousButton = document.querySelector('.audiobuttons img[src="img/previous.svg"]');
const nextButton = document.querySelector('.audiobuttons img[src="img/next.svg"]');

// Add a click event listener to the HR card
const hrCard = document.querySelector('.hrcard');
hrCard.addEventListener('click', () => {
  audioPlayer.play();
  playButton.src = "img/pause.svg"; 
});

// Add event listeners to the play and pause buttons
playButton.addEventListener('click', () => {
    if(audioPlayer.paused) {
        playButton.src = "img/pause.svg"; 
        audioPlayer.play();
    }
    else{
        audioPlayer.pause();
        playButton.src = "img/play.svg"; 
    } 

});
// Add event listeners to the previous and next buttons (if needed)
previousButton.addEventListener('click', () => {
  // Logic to go to the previous track
  // You can implement track change logic here
});

nextButton.addEventListener('click', () => {
  // Logic to go to the next track
  // You can implement track change logic here
});

// Update the seek bar as the audio plays
audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  seekBar.value = (currentTime / duration) * 100;
});

// Change the audio's current time based on seek bar position
seekBar.addEventListener('input', () => {
  const seekTime = (seekBar.value * audioPlayer.duration) / 100;
  audioPlayer.currentTime = seekTime;
});
