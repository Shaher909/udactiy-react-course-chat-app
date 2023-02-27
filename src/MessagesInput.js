import {useState} from "react";

const MessagesInput = ({addMessage, userID, users}) => {

    // If the user did not type anything, he/she should not be allowed to submit.
    let buttonStatus = false;

    const [messageText, setMessageText] = useState("")
    const handleChange = (e) => {
        setMessageText(e.target.value);
    }

    let message = {};

    const messageCreation = (e)=> {
        e.preventDefault();
        message.text = messageText;
        message.username = users[userID].username;

        return message;
    }

    return (
        <div>
            <form className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your message..."
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={!messageText} onClick={(e) => addMessage(messageCreation(e))}>
                  SEND
                </button>
              </div>
            </form>
          </div>
    )

}


export default MessagesInput;