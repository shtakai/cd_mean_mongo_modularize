console.log('test');
$(document).ready(function(){
  let socket = io.connect();
  socket.emit('test',{ data: 'osasimi' });
} );
