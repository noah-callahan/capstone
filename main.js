// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var words = ["hotel","philadelphia","recliner","summer","programmer","subway","airplane","mouse","spaghetti","skateboard","bicycle"]

function randomWord(){
    return words[Math.floor(Math.random() * words.length)];
};

var word = null;
var badTry = 0;
var goodTry = 0;
var input = null;
var wordArr = null;

document.getElementById("random-word").addEventListener("click", function(){
    document.getElementById("word").innerHTML = word = randomWord();
    document.getElementById("length").innerHTML = word.length;
    wordArr = word.split('');
});



function myGuess() {
    input = document.getElementById("userInput").value;
        if(wordArr.includes(input)){
            a = wordArr.indexOf(input)
            div = a.toString();
            console.log(div);
            console.log(wordArr);
            console.log(input);
            document.getElementById(div).innerHTML = wordArr[a]
            alert("Yup, that's in the word.");
            goodTry++;
            } else {
                alert("Nope, try again.");
                badTry++;
        }
    }



//7 divs
// var canvas = document.querySelector('canvas');
// var c = canvas.getContext('2d');


// c.fillRect(15, 15, 35, 65);
// c.font = "10px Arial";
// c.fillStyle = "red";
