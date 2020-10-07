const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        arr.push(expr.slice(i, i + 10));
    }
    let arrNew = arr.map((item) => {
        if (item === '**********') {
            return ' '
        }
        let arrLeter = [];
        for (let i = 0; i < 10; i = i + 2) {
            let symb = item.slice(i, i + 2);
            if (symb === '10') {
                arrLeter.push('.');
            } else if (symb === '11') {
                arrLeter.push('-');
            }
        }
        let leter = arrLeter.join('');
        return MORSE_TABLE[leter] 
    })
    let str = arrNew.join('');
    return str;
}

module.exports = {
    decode
}