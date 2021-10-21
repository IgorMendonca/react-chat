
import Routes from './routes';
import { socket } from './services/io'
import GlobalStyle from './styles/global'

socket.connect()

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
