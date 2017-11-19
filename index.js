(function() {
    'use strict';

    var titles = [
        'Democracy Dies in Darkness',
        'Welcome to Hell',
        'Screaming for Vengeance',
        'Reign in Blood',
        'The Erosion of Sanity',
        'Altars of Madness',
        'Vulgar Display of Power',
        'Seasons in the Abyss',
        'Slowly We Rot',
        'Bonded by Blood',
        'Storm of the Light’s Bane',
        'Operation: Mindcrime',
        'The Downward Spiral',
        'All Hope Is Gone',
        'Kill ’Em All',
        'Peace Sells … but Who’s Buying?',
    ];
    var title = titles[Math.floor(Math.random() * titles.length)];
    Array.slice(document.querySelectorAll('.masthead-tagline a,.header-tagline')).map(function(element) {
        element.innerHTML = title;
    });
})();
