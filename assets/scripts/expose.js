// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //TODO
  let jsConfetti = new JSConfetti();
  
  const hornImg = document.querySelector('img[src^="assets/images"]');
  const hornChoice = document.getElementById("horn-select");
  const chooseAudio = document.querySelector("audio");
  const soundButton = document.querySelector("button");
  const volumeSlider = document.getElementById("volume");
  const volumeImg = document.querySelector("#volume-controls img");

  hornChoice.addEventListener('change', () => {
    const chosen = hornChoice.value;
    if(chosen === 'air-horn'){
      hornImg.src = 'assets/images/air-horn.svg';
      chooseAudio.src = 'assets/audio/air-horn.mp3';
    } else if ( chosen === 'car-horn'){
      hornImg.src = 'assets/images/car-horn.svg';
      chooseAudio.src = 'assets/audio/car-horn.mp3';
    } else if (chosen === 'party-horn'){
      hornImg.src = 'assets/images/party-horn.svg';
      chooseAudio.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;

    chooseAudio.volume = volume / 100;

    if (volume == 0) {
      volumeImg.src = 'assets/icons/volume-level-0.svg'
    } else if (volume < 33) {
      volumeImg.src = 'assets/icons/volume-level-1.svg'
    } else if (volume < 67) {
      volumeImg.src = 'assets/icons/volume-level-2.svg'
    } else {
      volumeImg.src = 'assets/icons/volume-level-3.svg'
    }
  });
    soundButton.addEventListener('click', () => {
      chooseAudio.play()
      if(hornChoice.value === 'party-horn'){
        jsConfetti.addConfetti();
      }
    });
}
