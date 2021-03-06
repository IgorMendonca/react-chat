import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    height: 100%;
    background: #eefdec;
  }
  
  body, input, button {
    font: 400 16px Roboto, sans-serif, Helvetica;
  }

`