import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 500px;
  height: 500px;
  background: #fff;
  box-shadow: 5px 5px 5px #999;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 30px;
`

export const ChatHeader = styled.div`
  border-radius: 8px 8px 0 0;
  background: #90ee90;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

export const ChatBody = styled.div`
  padding: 20px 20px 100px 20px;
  overflow-y: auto;
`

export const SendMessage = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  width: 460px;
  padding: 20px;
  border-radius: 0 0 8px 8px;
  background: #e5e4e2;
  display: flex;
  align-items: stretch;

  > button {
    padding: 10px;
    border: 1px solid #999;
    background: #fff;
    border-radius: 0 20px 20px 0;
    border-left: none;
  }
`

export const SendMessageInput = styled.input`
  padding: 10px;
  border-radius: 20px 0 0 20px;
  border: 1px solid #999;
  flex : 1;
  border-right: none;

  &:focus {
    outline: none;
  }
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;

  &.you-container {
    align-items: flex-end;
  }
`

export const Message = styled.div`
  width: max-content;
  max-width: 90%;
  display: flex;
  align-items: flex-start;
  padding: 5px;
  border-radius: 4px;

  &.other {
    background: #add8e6;
  }

  &.you {
    background: #90ee90;
  }
`

export const TimeInfo = styled.span`
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
  padding: 0 5px;
`