import MessagesBox from "./MessagesBox";
import MessagesInput from "./MessagesInput";


const ChatRoom = ({users, userID, messages, addMessage}) => {

    

    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[userID].username}</div>
            <MessagesBox users={users} messages={messages} userID={userID}></MessagesBox>
            <MessagesInput users={users} addMessage={addMessage} userID={userID}></MessagesInput>
        </div>
    )
    
}

export default ChatRoom;