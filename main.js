// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var words = ["hotel","philadelphia","recliner","summer","programmer","subway","airplane","mouse","spaghetti","skateboard","bicycle","apprentice","anniversary"]

var hints = ["A place you stay on vacation.", "A city.","Something you sit on.", "A season.", "A profession.", "A form of public transportation.","A form of transportation.", "An animal or computer peripheral.","A food.", "Bart Simpson likes to ride this.","A form of transportation driven by exertion.","Your title when you first start a profession.","You'll be sleeping on the couch on this night, if you forget about this day."]

var points = [10, 15, 25, 50, 75, 100];

var worth = null;
var word = null;
var badTry = 0;
var goodTry = 0;
var input = null;
var wordArr = null;
var index = null;
var score = null;
var music = null;
var music_icon = null;

function randomWord(){
    return words[Math.floor(Math.random() * words.length)];
};

worth = points[Math.floor(Math.random() * points.length)];

function randomPoints(){
    worth = points[Math.floor(Math.random() * points.length)];
    return worth;
};

document.getElementById("music-icon").addEventListener("click", function pausePlay(){
    music_icon = document.getElementById("music-icon").src = "sad.png";
    music = document.getElementById("music");
    music.pause();
});


document.getElementById("random-word").addEventListener("click", function(){
    word = randomWord();
    console.log(word);
    document.getElementById("length").innerHTML = word.length;
    index = words.indexOf(word);
    document.getElementById("hint").innerHTML = hints[index];
    wordArr = word.split('');
    randomPoints();
    console.log(worth);
    document.getElementById("turn-points").innerHTML = worth;
});


document.getElementById("reset").addEventListener("click", function(){
    location.reload();
});



function myGuess() {
    input = document.getElementById("userInput").value;
        if(wordArr.includes(input)){
            for(i = 0; i < wordArr.length; i++)
                if (wordArr[i] == input){
                    div = String(i);
                    a = wordArr[i];
                    document.getElementById(div).innerHTML = input;
                    goodTry++;
                    score += worth;
                    document.getElementById("total-score").innerHTML = score;
                }
                } else {
                    alert("Sorry, try again!");
                    badTry++;
                    document.getElementById("bad-try").innerHTML = badTry;
                    score -= 25;
                    document.getElementById("total-score").innerHTML = score;
                } if(badTry == 4){
                    alert("Sorry, you lost!");
                    location.reload();
                }
                randomPoints()
                document.getElementById("turn-points").innerHTML = worth;
}

//worth = points[Math.floor(Math.random() * points.length)]


//random points return worth

    // if(wordArr.includes(input)){
    //     alert("Yup, that's in the word.");
    //     goodTry++;
    //     } else {
    //         alert("Nope, try again.");
    //         badTry++;
    // }
    

    // a = wordArr.indexOf(input)
    // div = a.toString();
    // console.log(div);
    // console.log(wordArr);
    // console.log(input);
    // document.getElementById(div).innerHTML = wordArr[a]


    //start at index of a


//7 divs
// var canvas = document.querySelector('canvas');
// var c = canvas.getContext('2d');


// c.fillRect(15, 15, 35, 65);
// c.font = "10px Arial";
// c.fillStyle = "red";
