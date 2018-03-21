// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var words = ["hotel","philadelphia","recliner","summer","programmer","subway","airplane","mouse","spaghetti","skateboard","bicycle"]

function randomWord(){
    return words[Math.floor(Math.random() * words.length)];
};

var word = null;
var badtry = 0;
var goodtry = 0;
var input = null;

document.getElementById("random-word").addEventListener("click", function(){
    document.getElementById("word").innerHTML = word = randomWord();
    document.getElementById("length").innerHTML = word.length;
});



function myGuess() {
     input = document.getElementById("userInput").value;
    console.log(input);
    if(word.includes(input)){   
        alert("Yup, that's in the word.");
        goodtry++;
    } else {
        alert("Nope, try again.");
        badtry++;
    }
}


//7 divs