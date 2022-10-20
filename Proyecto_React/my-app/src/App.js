import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import Componenteamt from './components/Componenteamt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website Buider´s
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mintic Ciclo 4
        </a>
      </header>
      <section className="componentes">
        <Componenteamt/>

      </section>
    </div>
  );
}

export default App;
