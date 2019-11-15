export let haiku = (input) => {
    //const numberOfLineBreaks = (input.match(/\n/g)).length;
    const numberOfLineBreaks = input.match(/\n/) !== null ? input.match(/\n/gm).length : 0;
    const numberOfLines = numberOfLineBreaks + 1;
    if (numberOfLines !== 3) {
        return false;
    }
    let test = input.split("\n");
    for(let i = 0; i< 3; i ++){
       let wordArray = test[i].split(" ");
        let wordCharacter = wordArray.reduce(function(acc, element) {
        acc += countSyllables(element);
        return acc;
       },0);
       console.log(wordCharacter);
       if (i=== 0 && wordCharacter !== 5) {
           return false;
       }
       if (i=== 1 && wordCharacter !== 7) {
        return false;
       }
       if (i=== 2 && wordCharacter !== 5) {
        return false;
       }
    }
    return true;
};

export let countSyllables = (word) => {
    word = word.toLowerCase();
    let count = word.match(/[aeuioy]/gi) !==null ? word.match(/[aeuioy]/gi).length : 0;
    count = count - (word.match(/[aeiouy](?=[aeiouy])/) !== null ? word.match(/[aeiouy](?=[aeiouy])/).length : 0) ;
    if (word === "the") {
        return count;
    }
    if (/e$/.test(word)) {
        count -= 1
    }
    return count;
}