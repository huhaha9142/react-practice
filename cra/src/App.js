import logo from './logo.svg';
import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Item name="Notebook"></Item>
      <Item name="Smartphone"></Item>
      <Item name="Tablet"></Item>
      <Item name="Moniter"></Item>
    </div>
  )
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          첫 번째 리액트 앱입니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
