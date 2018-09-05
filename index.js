var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var SerialPort = require('serialport');

var port = process.env.PORT || 3000;

// serial port initialization:
var myPort = new SerialPort("/dev/tty.usbmodem1411", 9600);

// these are the definitions for the serial events:
myPort.on('open', openPort); // called when the serial port opens

// Writes to Arduino on Click
let state = 'H';
function sendData() {
   // convert the value to an ASCII string before sending it:
   myPort.write(state);
   console.log('Sending ' + state + ' out the serial port');
   // increment brightness by 10 points. Rollover if > 255:
   state = state === 'H' ? 'L' : 'H';
}

function openPort() {
    console.log('port open');
}


// Listens for butten press data from Arduino

// serialport.on('open', function(){
//   console.log('Serial Port Open');
//   serialport.on('data', function(data){
//       console.log(data[0]);
//       // if (data[0] === 1) {
//         io.emit('press');
//       // }
//   });
// });

// listen for screenpress message from browser app
io.on('connection', function(socket){
  socket.on('screenPress', function(msg){
    sendData();
  });
});



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
