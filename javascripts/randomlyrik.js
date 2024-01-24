var gedichte = [
    'http://www.google.com',
    'http://www.stackoverflow.com',
    'http://www.example.com',
    'http://www.youtube.com'
];

function randomLyrik() {
        var i = parseInt(Math.random() * gedichte.length);
        location.href = gedichte[i];
}