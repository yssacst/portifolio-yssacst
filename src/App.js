import React from 'react';
import './App.css';

function App() {
  const [lightTheme, setLightTheme] = React.useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  }

  return (
    <div className={`App ${lightTheme ? ``:`dark-mode`}`} >
      <header className="App-header">
        <h1>Portifolio</h1>
      </header>
      <main className="App-main">
        Rayssa
        <button onClick={toggleTheme}>toggle</button>
      </main>
      <footer className="App-footer">
        <a href='https://br.freepik.com/vetores/flor'>Flor vetor criado por lukasdedi - br.freepik.com</a>
      </footer>
    </div>
  );
}

export default App;
