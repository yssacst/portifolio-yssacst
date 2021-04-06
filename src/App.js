import React from 'react';
import './App.css';
import NavImg from '../src/img/flores.png';

function App() {
  const [lightTheme, setLightTheme] = React.useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  }

  return (
    <div className={`App ${lightTheme ? ``:`dark-mode`}`} >
      <header className="App-header">
        <a href="#"><img src={NavImg}/></a>
        <nav className="App-nav">
          <a href="#">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#formacoes">Formações</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <main className="App-main">

        <div id="#" className="div-impar">
          <h6>Bem vindo ao meu portifólio</h6>
          <h1>Rayssa P. C. de Araujo</h1>
          
        </div>

        <div id="projetos" className="div-par">
           <h5>Em Construção</h5>
       
        </div>

        <div id="formacoes" className="div-impar">
           <h5>Em Construção</h5>
       
        </div>
        
        <div id="experiencia" className="div-par">
          <h5>Em Construção</h5>

        </div>

        <div id="contato" className="div-impar">
        <h5>Em Construção</h5>

          <button onClick={toggleTheme}>Mudar tema</button>
        </div>
      </main>

      <footer className="App-footer">
        <p>© 2021 Rayssa Costa</p>
        <a href='https://br.freepik.com/vetores/flor'>Flor vetor criado por lukasdedi - br.freepik.com</a>
      </footer>
    </div>
  );
}

export default App;
