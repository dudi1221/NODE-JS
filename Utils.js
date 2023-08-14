function wordsVowelCount(arrayStr){
    arrayStr.forEach(element => {
        let count = 0;
        for (let i = 0; i < element.length; i++){
            if(element[i] === 'a' || element[i] === 'i' || element[i] === 'e' || element[i] === 'o' || element[i] === 'u'){
                count ++;
            }
        }
        console.log('word: ' + element + '\n' + 'vowelCount: ' + count);
    });
}
