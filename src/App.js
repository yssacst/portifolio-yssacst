import React from 'react';
import './App.css';
import NavImg from '../src/img/flores.png';
import fotoPerfil from '../src/img/form.png';


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
          <h1 className="title">Rayssa P. C. de Araujo</h1>
          <div className="d-flex">
            <div className="d-resumo">
                  <p>23 anos</p>
                  <p>Técnica em Informática por CEFET</p>
                  <p>Bacharel em Sistemas de Informação por UNESA</p>
                  <p>Full Stack por Recode Pro</p>
            </div>
            <div className="d-pic">
              <img src={fotoPerfil}/>
            </div>
          </div>
        </div>

        <div id="projetos" className="div-par">
           <h5>Em Construção</h5>
       
        </div>

        <div id="formacoes" className="div-impar">
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
        <a href='https://br.freepik.com/vetores/flor' className="atribuicao">Flor vetor criado por lukasdedi - br.freepik.com</a>
        <a href="#" className="a-topo">Topo</a>
      </footer>
    </div>
  );
}

export default App;
