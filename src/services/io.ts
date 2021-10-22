import io from 'socket.io-client'

const socket = io('http://10.0.0.102:3001')

export {socket}