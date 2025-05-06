// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voice-select');
const textToSpeak = document.getElementById('text-to-speak');
const speakButton = document.querySelector('button');
const image = document.querySelector('img');
let selectedVoice = null;
const openImage = 'assets/images/smiling-open.png'
const closedImage = 'assets/images/smiling.png'

function populateVoiceList() {
  const voices = synth.getVoices();

  // Clear existing options except the placeholder
  for (let i = voiceSelect.options.length - 1; i > 0; i--) {
    voiceSelect.remove(i);
  }

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
}

function init() {
  populateVoiceList();

  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoiceList;
  }
}

voiceSelect.addEventListener('change', () => {
  const selectedOption = voiceSelect.selectedOptions[0];
  const selectedName = selectedOption.getAttribute('data-name');
  const voices = synth.getVoices();
  selectedVoice = voices.find(voice => voice.name === selectedName);

});

speakButton.addEventListener('click', () => {
  const inputText = textToSpeak.value;
  
  const utterance = new SpeechSynthesisUtterance(inputText);
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  synth.speak(utterance);
  image.src = openImage;
  utterance.addEventListener('end', () => {
    image.src = closedImage;
  });
