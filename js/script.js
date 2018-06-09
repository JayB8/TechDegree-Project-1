// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// An array of objects containing the quotes and associated information:
var quotes = [

  {
    quote: 'We are all in the gutter, but some of us are looking at the stars.',
    source: 'Oscar Wilde',
    citation: "Lady Windermere's Fan",
    year: 1892,
    tag: 'Source type: Play'
  },

  {
    quote: 'Clouds come floating into my life, no longer to carry rain or usher storm, but to add colour to my sunset sky.',
    source: 'Rabindranath Tagore',
    citation: 'Stray Birds',
    year: 1916,
    tag: 'Source type: Poem'
  },

  {
    quote: 'Let us live for the beauty of our own reality.',
    source: 'Charles Lamb',
    tag: 'Source type: Essay'
  },

  {
    quote: 'Freely chosen, discipline is absolute freedom.',
    source: 'Ron Serino',
    tag: 'Source type: Poem'
  },

  {
    quote: 'You will never fulfill your destiny until you let go of the illusion of control.',
    source: 'Master Oogway',
    citation: 'Kung Fu Panda',
    year: 2008,
    tag: 'Source type: Film'
  },

  {
    quote: 'I have lived with several Zen masters – all of them cats.',
    source: 'Eckhart Tolle',
    citation: 'The Power of Now',
    year: 1999,
    tag: 'Source type: Book'
  }

];


// Function to generate a random background colour:
function newBGColour() {
  var backgroundColour = 'rgb(';
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  backgroundColour += r + ', ' + g + ', ' + b + ')';
  return backgroundColour
}


// Function to return a random quote object from the quotes array:
function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * 6);
  return quotes[randomIndex];
}


// Function to print quote to webpage:
function printQuote() {
  var quoteObject = getRandomQuote();
  var HTML = '<p class = "quote">'+ quoteObject["quote"] + '</p>';
  HTML += '<p class = "source">' + quoteObject["source"];

  var props = ["citation", "year", "tag"];
  for (var i = 0; i < props.length; i += 1) {
    if (quoteObject[props[i]]) {
      HTML += '<span class = ' + props[i] +'>' + quoteObject[props[i]] + '</span>';
    }
  }

  HTML += '</p>'
  document.getElementById('quote-box').innerHTML = HTML;

// Calls newBGColour() function to change background color each time quote changes:
  document.body.style.backgroundColor = newBGColour();
}


// Change quote automatically every 30 seconds:
var intervalID = window.setInterval(printQuote, 30000);
