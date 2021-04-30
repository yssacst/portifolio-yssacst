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
          <input type="checkbox" id="check"/>
          <label for="check" className="checkbtn"><i className="fas fa-bars"></i></label>
          <ul>
              <li><a href="#">Sobre mim</a></li>
              <li><a href="#formacoes">Formações</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#experiencia">Experiência</a></li>
              <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <div id="#" className="div-impar">
          <h6>Bem vindo ao meu portifólio</h6>
          <h1 className="title">Rayssa P. C. de Araujo</h1>
          <div className="d-flex">
            <div className="d-pic">
              <img src={fotoPerfil}/>
            </div>
            <div className="d-resumo">
                  <p>Prazer, me chamo Rayssa e essa pessoinha aí da foto sou eu :D</p>
                  <p>Tenho 24 anos e minha aventura no mundo da tecnologia se iniciou 
                    oficialmente aos meus 14 anos, quando iniciei meu curso Técnico em
                    Informática pelo CEFET/UnedNI, que foi onde me encontrei de verdade
                    no meu primeiro Hello World (risos). E, desde então, venho me dedicado a área.</p> 
                    <p>Em 2015, logo após concluir o Ensino Médio/Técnico, ingressei no curso Bacharel
                      de Sistemas de Informação pela UNESA, concluindo-o em 2018.2.</p>
                      <p>Estou apenas no início da minha caminhada, e ainda quero fazer muita história. </p>
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
        <p>Copyright © 2021, Rayssa Costa - Todos os direitos reservados</p>
        <a href='https://br.freepik.com/vetores/flor' className="atribuicao">Flor vetor criado por lukasdedi - br.freepik.com</a>
        <a href="#" className="a-topo"><i class="fas fa-arrow-circle-up"></i></a>
      </footer>
    </div>
  );
}

export default App;
