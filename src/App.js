import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";


const App = () => {
  const users = [{ username: "Amy" }, { username: "John" }];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div>
        <ChatWindow users={users}></ChatWindow>
      </div>
    </div>
  );
};

export default App;
