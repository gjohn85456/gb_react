import './App.scss';
// props - object
//props = {name: 'Evgeniy'}

/*
так тоже работает
function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        My first React App
        <h3>Hello, {name}</h3>
      </header>
    </div>
  );
}
*/

function Message(props) {
  return (
    <div className="App">
      <header
        className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
        style={{ top: props.topPosition || '10px' }}
      >
        My first React App
        <h3>Hello, {props.name}</h3>
      </header>
    </div>

    /*
    <div className="App">
      <header className="App-header">
        My first React App
        <h3>Hello, {props.name}</h3>
      </header>
    </div>
*/
    // <div style={{ paddingTop: '25px', backgroundColor: 'red' }}>
    //   Hello world
    // </div>
  );
}

export default Message;
