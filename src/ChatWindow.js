import ChatRoom from "./ChatRoom";
import {useState} from "react";

const ChatWindow = ({users}) => {

    const [messages, setMessages] = useState (
        [
          { username: "Amy", text: "Hi, Jon!" },
          { username: "Amy", text: "How are you?" },
          { username: "John", text: "Hi, Amy! Good, you?" },
        ]
      )
    
      const addMessage = (message) => {
        setMessages([...messages, message])
      }


    return (
        <div className="container">
            <ChatRoom users={users} userID={0} messages={messages} addMessage={addMessage}></ChatRoom>
            <ChatRoom users={users} userID={1} messages={messages} addMessage={addMessage}></ChatRoom>
        </div> 
    )
}


export default ChatWindow;