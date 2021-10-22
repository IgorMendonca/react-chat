import { useEffect, useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { Socket } from 'socket.io-client'

import { ChatBody, ChatContainer, ChatHeader, Message, MessageContainer, SendMessage, SendMessageInput, TimeInfo } from "./styles"

interface ChatProps {
  userName: string
  roomId: string
  socket: Socket
}

const Chat = (props: ChatProps) => {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const sendMessage = async () => {
    if(currentMessage !== '') {
      const messageData = {
        room: props.roomId,
        author: props.userName,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}`
      }

      props.socket.emit('send-message', messageData)
      setMessageList((list) => [...list, messageData])
      setCurrentMessage('')
    }
  }

  useEffect(() => {
    props.socket.on('receive-message', (data) => {
      setMessageList((list) => [...list, data])
      
    })
    
    return () => {

    }
  }, [props.socket, props.roomId])

  return (
    <ChatContainer>
      <ChatHeader>
        <h3>{props.userName}</h3>
        <h3>{props.roomId}</h3>
      </ChatHeader>  
      <ChatBody>
        {messageList.map(msg => (
          <MessageContainer
            className={props.userName === msg.author ? 'you-container' : 'other-container'}
          >
            <Message
              className={props.userName === msg.author ? 'you' : 'other'}
            >
              <strong
                style={{margin: 5}}
              >{`${msg.author}:`}</strong>
              <p
                style={{wordBreak: 'break-word', margin: 5}}
              >
                {msg.message}
              </p>
            </Message>
            <TimeInfo>{msg.time}</TimeInfo>
          </ MessageContainer> 
        ))}
      </ChatBody>
      <SendMessage>
        <SendMessageInput 
          autoFocus
          placeholder={`Olá ${props.userName} ...`}
          value={currentMessage}
          onChange={(e) => {
            setCurrentMessage(e.target.value)
          }}
          onKeyPress={(e) => {
            if(e.key === 'Enter') {
              sendMessage()
            }
          }}
        />
        <button
          onClick={sendMessage}
        >
          <BiSend 
            size={20}
            color={'#999'}
          />
        </button>
      </SendMessage>
    </ChatContainer>
  )
}

export default Chat