import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  height: 50px;
  background: #90ee90;
  display: flex;
  justify-content: center;
  

  > div {
    width: 700px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ExitButton = styled.button`
  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`