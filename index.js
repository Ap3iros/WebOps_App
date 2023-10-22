console.log("Hello World");

let joke
let promise_joke = fetch("https://official-joke-api.appspot.com/random_joke");

promise_joke.then((res) => {
    if (res) {
        return res.json();
    }
    else throw new Error("Could Not Parse");
}).then((data) => {

    joke = data;
    let jokeText = `${joke.setup}<br><br>${joke.punchline}`;
    let jokePara = document.querySelectorAll(".jokecard");
       
    console.log(jokePara);

    if (jokePara && joke) {
        for (let x of jokePara) {
            x.innerHTML = jokeText;
        }
        }
        else {
            console.log("could not find lements");
        }

}).catch(error => {
    console.error(error);
});
 
let quote;
let promise_quote = fetch('https://api.quotable.io/random');

promise_quote.then((res) => {
    if (res) {
        return res.json();
    }
    else throw new Error('Could Not Parse');
}).then((data) => {
    quote = data;
    quoteText = `${quote.content}<br><br>-${quote.author}`;
    quotePara = document.querySelectorAll('.quotecard');

    if (quotePara && quote) {
        for (let x of quotePara) {
            x.innerHTML = quoteText;
        }
    }
    else {
        console.log('Could not find quote elements :(');
    }
}).catch(error => {
    console.error(error);
});

let card_flip = document.querySelectorAll('.card');
let click_audio = new Audio('./RICK ROLL SOUND_NEVER GONNA GIVE YOU UP-High Quality.wav');
//card_flip is a node list of elements....

for (let x of card_flip) {
    x.addEventListener('click', function() {
        x.classList.toggle('cardflips');
        click_audio.play();
    });
};


