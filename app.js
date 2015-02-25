var five = require('johnny-five');
var board = five.Board();

board.on('ready', function() {
    var ping = five.Ping(7);
    var led = five.Led(13);

    ping.on('change', function() {

      if (this.cm < 10) {
        led.on();
      } else {
        led.off();
      }

    });
});
