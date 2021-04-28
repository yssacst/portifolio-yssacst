import React from 'react';
import './css/App.css';
import NavImg from '../src/img/flores.png';
import fotoPerfil from '../src/img/perfil.png';
import CardFormacao from './components/cardFormacao';


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
          <a href="#formacoes">Formações</a>
          <a href="#projetos">Projetos</a>
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
                  <p>24 anos</p>
                  <p>Técnica em Informática por CEFET</p>
                  <p>Bacharel em Sistemas de Informação por UNESA</p>
                  <p>Full Stack por Recode Pro</p>
            </div>
            <div className="d-pic">
              <img src={fotoPerfil}/>
            </div>
          </div>
        </div>

        <div id="formacoes" className="div-par">
          <CardFormacao 
            curso="Desenvolvimento Full Stack" 
            instituicao="Recode Pro" 
            nivel="Livre" 
            situacao="Concluido"
          />
          <CardFormacao 
            curso="Sistemas de Informação" 
            instituicao="Universidade Estácio de Sá" 
            nivel="Bacharelado" 
            situacao="Concluido"
          />
          <CardFormacao 
            curso="Técnico em Informática" 
            instituicao="CEFET/UnedNI" 
            nivel="Técnico" 
            situacao="Concluido"
          />
        </div>
        
        <div id="projetos" className="div-impar">
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
        <a href='https://br.freepik.com/vetores/flor' className="atribuicao">Flor vetor criado por lukasdedi - br.freepik.com</a>
        <a href="#" className="a-topo"><i class="fas fa-arrow-circle-up"></i></a>
      </footer>
    </div>
  );
}

export default App;
