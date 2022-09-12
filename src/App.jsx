const SERVER = import.meta.env.VITE_SERVER;

fetch(SERVER)
  .then((response) => response.json())
  .then((data) => console.log(data));

function App() {
  return <div className="App">Holidays</div>;
}

export default App;
