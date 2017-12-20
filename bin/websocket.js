/**
 * Created by yanhaoqi on 2017/12/19.
 */
var io
var guestNumber = 1
var nickNames = {}
var namesUsed = []
var currentRoom = {}

//创建一个websocket服务 并且监听到当前http服务的同一端口
function socketio(server) {
    io = require('socket.io')(server)
    //回调函数的参数是socket
    io.on('connection', function(socket) {
        console.log('websocket服务启动 并且===连接了===一个用户 id是：', socket.id)
//    一个websocket连接里面有很多socket 一个socket就是一个用户
        socket.on('chat message client', function(msg) {
            console.log('消息：' + msg)
            io.emit('chat message server', msg)
        })
        socket.on('disconnect', function() {
            console.log('一个用户===断开了===连接')
        })
    })
}
exports.socketio = socketio