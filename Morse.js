const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..'
};

document.getElementById('morseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value.toUpperCase();
    let morseResult = '';

    for (let char of textInput) {
        if (morseCodeMap[char]) {
            morseResult += morseCodeMap[char] + ' ';
        } else {
            morseResult += '? ';
        }
    }

    document.getElementById('result').textContent = morseResult.trim();
    document.getElementById('downloadBtn').style.display = 'inline';
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const resultText = document.getElementById('result').textContent;
    const blob = new Blob([resultText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'morse_code.txt';
    link.click();
});
