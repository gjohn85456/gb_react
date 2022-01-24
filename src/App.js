import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.scss';

function App(props) {
  const [messages, setMessage] = useState([]);
  const [input, setInput] = useState({});
  useEffect(() => {
    setTimeout(function () {
      if (messages.length != 0) {
        if (messages[messages.length - 1].author === "human") {
          let arr = [];
          arr = messages.slice();
          arr.push({ text: "Greetings man", author: "robot", id: messages.length });
          setMessage(arr);
        }
      }
    }, 1500);
  }, [messages])


  const handleBtn = () => {
    setMessage((preMessage) => {
      /*
      почему это не работает??? 
      messages/preMessage это массив почему мы не можем использовать методы массива для его изменения?
      input.id = preMessage.length;
      return preMessage.push(input)
      */
      let arr = [];
      input.id = preMessage.length;
      arr = preMessage.slice();
      let test = { ...input };
      arr.push(test);
      return preMessage = arr.slice();
    })
  }


  return (
    <div className="App">
      <input type="text" placeholder="your text" onChange={e => setInput({ text: e.target.value, author: "human" })} />
      <button onClick={handleBtn}>Btn</button>
      {messages.map(message => {
        return <div key={message.id}>{message.text} - say: {message.author}</div>
      })}
    </div>

  );
}

export default App;
