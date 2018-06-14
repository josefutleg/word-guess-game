    // create an array of songs
    var songList = ['nikes', 'pyramids','ivy','lens','nights','chanel','provider','biking', 'white','novacane','dust','solo','godspeed','voodoo','lost','monks','siegfried','lovecrimes'];    
    // choose a random song from array
    var randomSong;
    // create array to store correct letters from user
    var correctLetter = [];
    var wins = 0;
    var wrongLetter = [];
    // create an array that will change random song into an under score
    var playVideo = '<iframe width="500" height="500" src="https://www.youtube.com/embed/jgNjn2b1Jl0?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    var guessesCounter = 15;
    var docUserGuesses = 'press any letter to start!';
    var s;
    
    document.getElementById('guessesCounter').innerText = guessesCounter;
    document.getElementById('userGuesses').innerText = docUserGuesses;
    // document.querySelector('.container').innerHTML = playVideo;

    


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

    function surpriseVideo (){
        if (wins === 1){
            document.querySelector('h2').innerText = 'win 3 more for a surprise!';
            return;
        }
        if (wins === 2){
            document.querySelector('h2').innerText = '2 more!';
        }
        if (wins === 3){
            document.querySelector('h2').innerText = '1 more!';
        }
        if (wins === 4){
            document.querySelector('.container').innerHTML = playVideo;
        }
    }

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
            correctLetter = [];
            // guessesCounter = 15;
            wins = wins + 1;
            wrongLetter = [];
            surpriseVideo();
            document.getElementById('guessesCounter').innerText = guessesCounter;
            document.getElementById('userGuesses').innerText = "great! play again!";
            return;  
        }
        if (guessesCounter === 0){
            correctLetter = [];
            wins = 0;
            // guessesCounter = 15;
            wrongLetter = [];
            document.querySelector('h2').innerText = "name frank's song!";
            document.getElementById('guessesCounter').innerText = guessesCounter;
            document.getElementById('userGuesses').innerText = `:( it was ${randomSong}, play again!`;
            return;
        }

}   


document.onkeyup = play;