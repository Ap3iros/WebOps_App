console.log("Hello World");

let joke

let jokePara = document.querySelectorAll(".jokecard");
for (let x of jokePara) {
let promise_joke = fetch("https://official-joke-api.appspot.com/random_joke");
promise_joke.then((res) => {
    if (res) {
        return res.json();
    }
    else throw new Error("Could Not Parse");
}).then((data) => {
    console.log(data);
    joke = data;
    let jokeText = `${joke.setup}<br><br>${joke.punchline}`;
       
   // console.log(jokePara);
    
    x.innerHTML = jokeText;
    
}).catch(error => {
    console.error(error);
});
};

let quote;
quotePara = document.querySelectorAll('.quotecard');

for (let x of quotePara) {
let promise_quote = fetch('https://api.quotable.io/random');

promise_quote.then((res) => {
    if (res) {
        return res.json();
    }
    else throw new Error('Could Not Parse');
}).then((data) => {
    quote = data;
    quoteText = `${quote.content}<br><br>-${quote.author}`;

        x.innerHTML = quoteText;
    }).catch(error => {
        console.error(error);
    });
};
    
let card_flip = document.querySelectorAll('.card');
let click_audio = new Audio('./RICK ROLL SOUND_NEVER GONNA GIVE YOU UP-High Quality.wav');
//card_flip is a node list of elements....

for (let x of card_flip) {
    x.addEventListener('click', function() {
        x.classList.toggle('cardflips');
        click_audio.play();
    });
};


