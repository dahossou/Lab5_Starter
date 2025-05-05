// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //TODO

  let jsConfetti = new JSConfetti();

  const hornImg = document.querySelector('img[src^="assets/images"]');
  const hornChoice = document.getElementById("horn-select");
  const chooseAudio = document.querySelector("audio");
  const soundButton = document.querySelector("button");
  const volumeSlider = document.querySelector("volume");
  const volumeImg = document.querySelector("#volume-controls img")
 


  hornChoice.addEventListener('change', () => {
  const chosen = hornChoice.value;
  hornImg.src = `assets/images/${chosen}.svg`;
  hornImg.alt = `${chosen} img`;
  chooseAudio.src = `assests/audio/${chosen}.mp3`;
  });

  volumeSlider.addEventListener('input', (event) => changeVolumeLevel(event, volumeImg, chooseAudio));
  
  soundButton.addEventListener('click', (event) => {
    const buttonPath = hornChoice;
    if(buttonPath.value === 'party-horn'){
      jsConfetti.addConfetti();
    }
});

function changeVolumeLevel(event, volumeImg, chooseAudio){
  const volumeLevel = event.target.value;

  let volume = 0;
  if(volumeLevel == 0){
    volume = 0;
  }else if(volumeLevel < 33){
    volume = 1;
  }else if(volumeLevel < 67){
    volume = 2;
  }else{
    volume = 3;
  }
  const imgPath = `assests/icons/volume-level-${volumeLevel}.svg`;
  volumeImg.setAttribute('src', imgPath);
  
  chooseAudio.volumeLevel = volumeLevel/100;
}
}
