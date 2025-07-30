<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NODEBLACK ARPANET AUTH</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        body {
            background: #121212;
            color: #228B22;
            font-family: 'VT323', monospace;
            padding: 40px;
            margin: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #terminal {
            background: #000;
            padding: 20px;
            max-width: 600px;
            width: 100%;
            border: 2px solid #228B22;
            box-shadow: none;
            border-radius: 0;
        }
        .headline {
            display: flex;
            align-items: center;
            font-size: 1.2em;
            letter-spacing: 1px;
        }
        #pulse {
            margin-left: 1em;
            min-width: 10ch;
            display: inline-block;
        }
        .blink {
            animation: blink 1s step-start infinite;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
        .input-line {
            display: flex;
            align-items: center;
            margin-top: 8px;
            cursor: pointer;
        }
        input {
            background: none;
            border: none;
            color: #228B22;
            outline: none;
            font-family: inherit;
            font-size: inherit;
            width: 85%;
        }
    </style>
</head>
<body>

<div id="terminal">
    <div class="headline">
        <span>SYSTEM READY</span>
        <span id="pulse"></span>
    </div>
    <pre id="textDisplay"></pre>
    <div class="input-line" id="inputLine">
        <span class="blink">_</span>
        <input id="inputField" autocomplete="off" autofocus spellcheck="false" />
    </div>
    <pre id="output"></pre>
</div>

<audio id="keystroke" src="https://actions.google.com/sounds/v1/foley/keyboard_typing_fast.ogg"></audio>
<audio id="errorSound" src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"></audio>
<audio id="confirmSound" src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"></audio>

<script>
    // --- Typewriter setup ---
    const lines = [
        "ARPANET NODE #1 (UCLA) CONNECTED",
        "ARPANET NODE #2 (SRI) AWAITING INPUT",
        "",
        "TYPE COMMAND TO BEGIN TRANSMISSION:"
    ];

    function typeLines(lines, cb) {
        const textDisplay = document.getElementById('textDisplay');
        let lineIdx = 0;
        let charIdx = 0;
        function typeChar() {
            if (lineIdx < lines.length) {
                let line = lines[lineIdx];
                if (charIdx === 0 && lineIdx !== 0) textDisplay.textContent += "\n";
                textDisplay.textContent += line.charAt(charIdx);
                charIdx++;
                if (charIdx < line.length) {
                    setTimeout(typeChar, 60); // typing speed
                } else {
                    charIdx = 0;
                    lineIdx++;
                    textDisplay.textContent += "\n";
                    setTimeout(typeChar, 350);
                }
            } else {
                if (cb) cb();
            }
        }
        typeChar();
    }

    function startPulse() {
        const pulse = document.getElementById('pulse');
        let count = 0;
        setInterval(() => {
            count = (count + 1) % 8;
            pulse.textContent = '.'.repeat(count);
        }, 650);
    }

    document.addEventListener('DOMContentLoaded', () => {
        typeLines(lines, null);
        startPulse();
        document.getElementById('inputField').focus();
    });

    // --- Input and sound logic ---
    const keystroke = document.getElementById('keystroke');
    const errorSound = document.getElementById('errorSound');
    const confirmSound = document.getElementById('confirmSound');
    const inputField = document.getElementById('inputField');
    const output = document.getElementById('output');

    // Focus input if click anywhere on the input line
    document.getElementById('inputLine').onclick = () => inputField.focus();

    inputField.addEventListener('keydown', (e) => {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            keystroke.currentTime = 0;
            keystroke.play();
        }
        if (e.key === 'Enter') {
            processInput(inputField.value.trim().toLowerCase());
            inputField.value = '';
        }
    });

    function processInput(input) {
        if (input === 'lo') {
            errorSound.currentTime = 0;
            errorSound.play();
            output.textContent = 'TRANSMISSION INITIATED...\nINPUT: l\nINPUT: o\nERROR: SYSTEM CRASHED AT NODE #2 (SRI).\nRETRY AUTHENTICATION:';
        } else if (input === 'darpa1969') {
            confirmSound.currentTime = 0;
            confirmSound.play();
            output.textContent = 'AUTHENTICATION SUCCESSFUL\nNODEBLACK CIVILIAN PROTOCOL INITIATED.\nAUTHORIZATION CODE: LITE-ACCESS-1969\nUPDATING INTERFACE...';
        } else if (input.length > 0) {
            errorSound.currentTime = 0;
            errorSound.play();
            output.textContent = 'INVALID COMMAND. RETRY AUTHENTICATION:';
        }
    }
</script>

</body>
</html>
