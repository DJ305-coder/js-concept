let paragraph = 'Lorem is placeholder text commonly';
let words = paragraph.split(' ');

let longWord = '';
for(let word of words){
    if(word.length > longWord.length){
        longWord = word;
    }
}

console.log(longWord)

