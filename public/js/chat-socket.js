var socket = io('http://localhost:5000/');

socket.on('socketToMe', function (data) {
  console.log(data);
});

socket.emit('fuckYou', 'Fuck');