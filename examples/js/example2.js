var webpage = require('webpage').create();

// open scotch.io
webpage.open('https://scotch.io', function(status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var title = webpage.evaluate(function() {
            return document.title;
        });

     // log the title
        console.log(title === 'Scotch | Developers bringing fire to the people.');
    }

    phantom.exit();
});