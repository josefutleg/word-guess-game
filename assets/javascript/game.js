    // create an array of songs
    var songList = ['nikes', 'pyramids','ivy','lens','nights','chanel','provider','biking', 'white','novacane','dust','solo','godspeed','voodoo'];    
    // choose a random song from array
    var randomSong;
    // create array to store correct letters from user
    var correctLetter = [];
    // create array to store wrong letters from user
    var wrongLetter = [];
    // create an array that will change random song into an under score
    // var underScore = [];
    var guessesCounter = 15;
    var docUserGuesses = 'press any letter to start!';
    var s;
    
    document.getElementById('guessesCounter').innerText = guessesCounter;
    document.getElementById('userGuesses').innerText = docUserGuesses;

    function startUp(){
        randomSong = songList[Math.floor(Math.random() * songList.length)];
        for(var i = 0; i < randomSong.length; i++){
            correctLetter[i] = "_";
        }
        s = correctLetter.join(" ");
        document.getElementById("letter").innerText = s;
        // debugger;
    }
    startUp();

    console.log(randomSong);

    function playAgain(){
        correctLetter = [];
        startUp();
        guessesCounter = 15;
        wrongLetter = [];
        document.getElementById('guessesCounter').innerText = guessesCounter;
        document.getElementById('userGuesses').innerText = docUserGuesses;
        console.log(randomSong);
    };

    function play(x){
        var userInput = x.key;


        if(userInput !== randomSong) 
        {
            guessesCounter = guessesCounter -1;
            wrongLetter.push(userInput);
            document.getElementById('userGuesses').innerText = wrongLetter;
            document.getElementById('guessesCounter').innerText = guessesCounter;    
        }
        if (randomSong.indexOf(userInput) > -1)
        {
            correctLetter = randomSong.split("").map(function (l, id) {
                if(l == userInput){
                    return l
                }
                return correctLetter[id]
            });
            document.querySelector("#letter").innerText = correctLetter.join(` `);

        }
        userGuess = correctLetter.join('').toString();

        if (randomSong === userGuess){
            guessesCounter = 15;
            wrongLetter = [];
            document.getElementById('guessesCounter').innerText = guessesCounter;
            document.getElementById('userGuesses').innerText = "great! play again!";
        }
        if (guessesCounter === 0){
            correctLetter = [];
            guessesCounter = 15;
            wrongLetter = [];
            document.getElementById('guessesCounter').innerText = guessesCounter;
            document.getElementById('userGuesses').innerText = `:( it was ${randomSong}, play again!`;
            return;
        }
}   



document.onkeyup = play;