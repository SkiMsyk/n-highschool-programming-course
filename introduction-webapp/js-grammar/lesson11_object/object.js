// var startTime = null;
// var displayArea = document.getElementById('display-area')
// rewrite by object expression
var game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    currentTime: null,
    seconds: null,
    start: function() {
        game.startTime = Date.now();
        document.body.onkeypress = game.stop;
        game.displayArea.innerText = 'has started';
    },
    stop: function() {
        game.currentTime = Date.now();
        game.seconds = (game.currentTime - game.startTime) / 1000;
        if (9.5 <= game.seconds && game.seconds <= 10.5) {
            game.displayArea.innerText = game.seconds + '. Great!';
        } else {
            game.displayArea.innerText = game.seconds + '. Bad LoL';
        }
    },
};

// function start() {
//     // startTime = Date.now();
//     game.startTime = Date.now();
//     document.body.onkeypress = stop;
//     console.log('start!')
// }

// function stop() {
//     var currentTime = Date.now();
//     var seconds = (currentTime - game.startTime) / 1000;
//     if (9.5 <= seconds && seconds <= 10.5) {
//         game.displayArea.innerText = seconds + '. Great!';
//     } else {
//         game.displayArea.innerText = seconds + '. Bad';
//     }
//     console.log('has stopped');
// }

if (confirm("Press OK and when you think you have 10 seconds after press any key")) {
    game.start();
}