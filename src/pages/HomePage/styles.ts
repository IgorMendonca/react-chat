import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
 display: flex;
 flex-direction: column;

`

export const JoinInput = styled.input`
  border: none;
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px #999;

  &:focus {
    outline: none;
  }
`

export const JoinButton = styled.button`
  background: #90ee90;
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px #999;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #65c368;
  }

`