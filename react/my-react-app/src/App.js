import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <p>
          Edit <code>src /App.js</code> and save to reload.
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


function newApp() {
  return (
    <div className="newApp">
      <header className="app-Header">
        <h2>kAJSNdjkasn</h2>
      </header>   
    </div>
  );
}



function testApp() {
  return (
    <>
    <div>
      
      <MovieCard movie={{title:"Hello", release_date: "Dont Know", url:"https://www.normans.co.uk/cdn/shop/articles/acoustic-vs-classical_7aa53ad4-bd8b-4b5e-94be-7cb6fde78a4b.jpg"}}/>
      <MovieCard movie={{title:"World", release_date: "Dontasdlkm Know", url:"https://www.normans.co.uk/cdn/shop/articles/acoustic-vs-classical_7aa53ad4-bd8b-4b5e-94be-7cb6fde78a4b.jpg"}}/>
    </div>
    </>
  );
}


export default testApp;
