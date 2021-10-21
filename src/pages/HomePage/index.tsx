import { Container, Page, JoinInput, JoinButton, Form } from "./styles"
import balloonLogo from '../../assets/images/balloon.svg'
import { useState } from "react"
import { useHistory } from "react-router"

import { socket } from '../../services/io'

const HomePage = () => {
  const history = useHistory()

  const [userName, setUserName] = useState('')
  const [roomId, setRoomId] = useState('')

  const handleJoinSubmitRoom = () => {
    if(userName !== '' && roomId !== '') {
      socket.emit('room-join', {
        userName, roomId
      })

      history.push(`/rooms/${roomId}`, {
        params: {
          userName,
          roomId
        }
      })
    } 
  }

  return (
    <Page>
      <Container>
        <img 
          src={balloonLogo} 
          alt="balloon logo"
          style={{width: 200, height: 200}}
        />
        <Form>
          <JoinInput 
            required
            placeholder="Apelido"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <JoinInput 
            required
            placeholder="Código da sala"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value)
            }}
          />
          <JoinButton
            onClick={handleJoinSubmitRoom}
          >
            ENTRAR
          </JoinButton>
        </Form>        
      </Container>
    </Page>
  )
}

export default HomePage