import fs from 'fs'
import _ from 'lodash'
import { promisify } from 'util';


const readFileAsync = promisify(fs.readFile);

async function returnFile() {
    try {
        const textData = await readFileAsync('C:\\תכנות\\node js\\node_modules\\data\\text.txt', 'utf8');
        return textData;
    } catch (err) {
        throw err;
    }
}

function appendFiles(data){
    fs.appendFile('C:\\תכנות\\node js\\highlightedTasks.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
}

//1
async function displayText() {
    try {
        const textData = await returnFile();
        console.log(textData);
    } catch (error) {
        console.error(error);
    }
}
// displayText();
//2
async function countWords() {
    try {
        const textData = await returnFile();
        console.log(_.words(textData).length);
    } catch (error) {
        console.error(error);
    }
}
// countWords();
//3
async function reverseText() {
    try {
        const textData = await returnFile();
        // let text = 
        console.log(_.reverse(_.words(textData)).toString());
    } catch (error) {
        console.error(error);
    }
}
// reverseText();
//4
async function uniqWords() {
    try {
        const textData = await returnFile();
        console.log(_.uniq(_.words(textData)));
    } catch (error) {
        console.error(error);
    }
}
// uniqWords();
//5
async function countUniqWords() {
    try {
        const textData = await returnFile();
        console.log(_.uniq(textData).length);
    } catch (error) {
        console.error(error);
    }
}
// countUniqWords();
//6
async function uniqWordsToUpperCase() {
    try {
        const textData = await returnFile();
        appendFiles(_.uniq(_.words(textData.toUpperCase())));
    } catch (error) {
        console.error(error);
    }
}
// uniqWordsToUpperCase();
//7
async function uniqWordsThenBiggerThatFive() {
    try {
        const textData = await returnFile();
        const data = _.uniq(_.words(textData)).forEach(element => {
            if(element.length > 5){
                console.log(element);
            }
        });
        appendFiles(data)
    } catch (error) {
        console.error(error);
    }
}
// uniqWordsThenBiggerThatFive();
//8
async function wordVowelCount() {
    try {
        const textData = await returnFile();
        let words = _.words(textData.toLowerCase());
        const data = words.forEach(element => {
            let count = 0;
            for (let i = 0; i < element.length; i++){
                if(element[i] === 'a' || element[i] === 'i' || element[i] === 'e' || element[i] === 'o' || element[i] === 'u'){
                    count ++;
                }
            }
            console.log('word: ' + element + '\n' + 'vowelCount: ' + count);
        });
        appendFiles(data)
    } catch (error) {
        console.error(error);
    }
}
// wordVowelCount();


let gr
export default gr = {
    displayText,
    countWords,
    reverseText,
    uniqWords,
    countUniqWords,
    uniqWordsToUpperCase,
    uniqWordsThenBiggerThatFive,
    wordVowelCount
}