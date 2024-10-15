function encodeAndDecodeMessages() {
    const buttonsRef = document.querySelectorAll("#main button");
    const encodeBtn = buttonsRef[0];
    const decodeBtn = buttonsRef[1];

    encodeBtn.addEventListener("click", encodeAndSend);
    decodeBtn.addEventListener("click", decodeAndRead);

    const textAreasRef = document.querySelectorAll("#main textarea");
    const encodeAreaRef = textAreasRef[0];
    const decodeAreaRef =textAreasRef[1];

    function encodeAndSend(event) {
        const text = encodeAreaRef.value;
        let encodeMSG = '';
        for(let i = 0; i< text.length; i++){
            let ch = text[i];
            let charInt = ch.charCodeAt(0) + 1;
            let newChar = String.fromCharCode(charInt);
            encodeMSG += newChar;
        }
        decodeAreaRef.value = encodeMSG;
        encodeAreaRef.value = '';
    }

    function decodeAndRead(event) {
        const text = decodeAreaRef.value;
        let decodeMSG = '';
        for(let i = 0; i < text.length; i++){
            let ch = text[i];
            let charInt = ch.charCodeAt(0) - 1;
            let newChar = String.fromCharCode(charInt);
            decodeMSG += newChar;
        }
       decodeAreaRef.value = decodeMSG;
    }
}