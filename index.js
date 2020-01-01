//const initialText = document.querySelector('.typing');
const afterText = ['Be creative this year','and','Work hard to make your Dreams a reality'];
//declaring variables for individual letter count, indexes//
let count = 0;
let index = 0;
//declaring variables which will hold the letters and words//
let words = "";
let letters = "";

(function type(){
    if(index === afterText.length){
        index = 0;
    }
    words = afterText[index];
    letters = words.slice(0, ++count);
    document.querySelector('.typing').textContent = letters;
    if(letters.length === words.length){
        index++;
        count=0;        
    }
    setTimeout(type, 400);

}());
