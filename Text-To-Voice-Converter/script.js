let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector('select')

window.speechSynthesis.onvoiceschanged = ()=>{

    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voices.forEach((voice,i)=>{voiceSelect.options[i] = new Option(voice.name,i)})

};

voiceSelect.addEventListener('change',()=>{

    speech.voice = voices[voiceSelect.value]
})

document.querySelector('button').addEventListener('click',()=>{

    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);

})


// Select the span element
let spanElement = document.querySelector('.hero h1 span');

// Function to toggle the text content of the span element
function toggleText() {
    if (spanElement.textContent === 'Converter') {
        spanElement.textContent = 'Write Anything';
    } else {
        spanElement.textContent = 'Converter';
    }
}

setInterval(toggleText,3000);
