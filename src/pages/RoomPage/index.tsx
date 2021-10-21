import { useHistory, useLocation } from "react-router"
import { Container, ExitButton, Header, Page } from "./styles"
import { GiExitDoor } from 'react-icons/gi'
import Chat from "../../components/Chat"

import {socket} from '../../services/io'

const RoomPage = () => {
  const location = useLocation()
  const history = useHistory()
  const params = location.state.params

  const handleExitRoom = () => {
    history.push('/')
  }

  return(
    <>
      <Page>
        <Header>
          <div>
            <div></div>
            <ExitButton
              onClick={handleExitRoom}
            >
              <GiExitDoor 
                size={30}
                color='#4b3621'
              />
            </ExitButton>
          </div>
        </Header>
        <Container>
          <Chat 
            socket={socket}
            userName={params.userName}
            roomId={params.roomId}
          />
        </Container>
      </Page>
    </>
  )
}

export default RoomPage