


// alert("hello from JS"); <-- testing to make sure JS file is linked to HTML
let dateTime = new Date();
console.log('data type of dateTime: ', typeof dateTime);
let hour = dateTime.getHours(); // get the current hour; will be 0-23

// set meal based on current hour
let meal = '';
// hour = 23; <-- just for testing different hours
if (hour < 4) {
    meal = 'Midnight';
} else if (hour < 11) {
    meal = 'Breakfast';
} else if (hour < 15) {
    meal = 'Lunch';
} else if (hour < 22){ // hour is 16+
    meal = 'Dinner'
} else {
    meal = 'Midnight'
}



//make the a tag as a concatenated string
//<a href="Breakfast.html">Breakfast</a>
let mealLink = '<a class="button" href="' + meal + '.html">' + meal + '</a>';
console.log(mealLink);

// output the meal link to the current menu div
let currentMenuDiv = document.getElementById('current-menu');
currentMenuDiv.innerHTML = mealLink;

// function runs when Dark Mode checkbox is checked or unchecked
// get the checkbox:
// let ckbox = document.getElementById('cb');
let ckbox = document.querySelector('#cb');
// instruct the checkbox to call function whenever the checkbox is checked or unchecked
ckbox.addEventListener('change', toggleDarkMode);
function toggleDarkMode() {
    // log whether or not checkbox is checked
    console.log(this.checked) //true or false
    // if checkbox is checked, use dark mode
    // else checkbox is unchecked, so switch to light mode
    if (this.checked) {
        document.body.style.backgroundColor = '#3d1c07';
        document.body.style.color = '#ffc793';
        document.body.querySelector('#light-label').style.color= '#ffc793';
    } else {
        document.body.style.backgroundColor = '#ffe4cb';
        document.body.style.color = '#3d1c07';
        document.body.querySelector('#light-label').style.color= '#3d1c07';
    }
}


// get the h3 in the hero; it is for displaying the timely greeting
let heroH3 = document.querySelector('div h3');
let timelyGreeting = "";
let timeNow = dateTime.toLocaleTimeString('en-US');
// make the timely greeting based on current hour
if (hour < 4) {
    timelyGreeting = 'Hey, Night Owl!'
} else if (hour < 12) {
    timelyGreeting = 'Good Morning! ';
} else if (hour < 17){
    timelyGreeting = 'Good Afternoon! ';
} else {
    timelyGreeting = 'Good Evening! ';
}
timelyGreeting += '<br>The time is now: ' + timeNow;
heroH3.innerHTML = timelyGreeting;

// make an array of the quotes copied from the internet
let foodQuotes = [
"Coffee is a hug in a mug.",
"Life happens. Coffee helps.",
"A day without coffee is like... just kidding. I have no idea.",
"Coffee: because adulting is hard.",
"But first, coffee.",
"I like my coffee like I like my mornings: dark, bitter, and too hot for me.",
'"Behind every successful person is a substantial amount of coffee." – Anonymous',
'"Coffee is the best thing to douse the sunrise with." – Terri Guillemets',
'"Adventure in life is good; consistency in coffee even better." – Justina Chen Headley',
"I orchestrate my mornings to the tune of coffee.",
'"Coffee and love are best when they are hot." – German Proverb',
"Espresso yourself.",
"Coffee: because anger management is too expensive.",
"Coffee is the answer. I don’t remember the question.",
"Coffee – because bad mornings deserve a second chance.",
"Coffee first. Schemes later.",
"Sometimes I go hours without drinking coffee… it’s called sleeping.",
"Behind every great day is a cup of coffee.",
'"Coffee is a language in itself." – Jackie Chan',
"A yawn is a silent scream for coffee.",
"Coffee is the foundation of my food pyramid.",
"Caffeine and kindness – both fuel the soul.",
"Humanity runs on coffee.",
"Coffee: because it’s too early for wine.",
"All you need is love and more coffee."
];

// log the 10th quote
console.log(foodQuotes[9]);
// log a random quote
let r = Math.floor(Math.random() * foodQuotes.length);
console.log(r); // 0-24
console.log(foodQuotes[r]);
// output the random quote
let quoteH4 = document.querySelector('div h4');
quoteH4.innerHTML = foodQuotes[r];
