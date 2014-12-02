/**
 * Created by Zelada_Torrez on 01-12-14.
 */
var server = require('http').createServer(),
    io = require('socket.io').listen(server);
server.listen(8080);

var notification =require('./ServerNode/users');

var notifications=new array();


io.sockets.on('connection',function(socket){

    socket.on('newNotification',function(data){
        var single_notification=new notification();

        single_notification.setDataNotification(data);



        notifications.push(single_notification);

    });

    socket.on('Message',function(data){
        io.sockets.emit('SendMsg',data);
    });


})


console.log('server listening ...8080'  );