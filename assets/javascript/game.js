    // create an array of songs
    var songList = ['nikes', 'pyramids','ivy','lens'];    
    // choose a random song from array
    var randomSong;
    // create array to store correct letters from user
    var correctLetter = [];
    // create array to store wrong letters from user
    var wrongLetter = [];
    // create an array that will change random song into an under score
    // var underScore = [];
    var guessesCounter = 9;
    var docUserGuesses = '_';
    var s;
    



    document.getElementById('guessesCounter').innerText = guessesCounter;
    document.getElementById('userGuesses').innerText = docUserGuesses;


        randomSong = songList[Math.floor(Math.random() * songList.length)];
        for(var i = 0; i < randomSong.length; i++){
            correctLetter[i] = "_";
        }
        s = correctLetter.join(" ");
        document.getElementById("letter").innerText = s;


    console.log(randomSong);

    function play(x){
        var userInput = x.key;
        var answer = document.getElementById("letter").value;
        // var keyword = String.fromCharCode(x.key);
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
            console.log('true');
        }
        if (guessesCounter === 0){
            guessesCounter = 9;
            wrongLetter = [];
            document.getElementById('guessesCounter').innerText = guessesCounter;
            document.getElementById('userGuesses').innerText = docUserGuesses;

        }
        if (correctLetter === randomSong){
            console.log('win');
        }
}   
document.onkeyup = play;