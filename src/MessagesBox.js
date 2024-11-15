const MessagesBox = ({users, messages, userID}) => {

    return (
        <ul className="message-list">
            {messages.map((message, index) => (
              <li
              key={index}
              className={
                  message.username === users[userID].username
                    ? "message sender"
                    : "message recipient"
                }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
            ))}
        </ul>
    )
}


export default MessagesBox;