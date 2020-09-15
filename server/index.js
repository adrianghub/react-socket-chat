const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000

const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
  console.log('Established connection with socket')

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  })


  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

app.use(router)

server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))