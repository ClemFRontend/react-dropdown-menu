import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <h1>Dropdown Menu</h1>
      <Dropdown title="First menu">
        <p>🚀 First item</p>
        <p>🎉 Second item</p>
      </Dropdown>
      <Dropdown title="Second menu">
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
        <p>item 4</p>
      </Dropdown>
    </div>
  );
}

export default App;
