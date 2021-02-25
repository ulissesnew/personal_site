
import './App.scss';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Navbar/>
     

      </header>
      <section style={{margin:"500px"}} id="about">about</section>
      <section style={{margin:"500px"}}  id="blog">blog</section>
      <section style={{margin:"500px"}} id="portfolio">portfolio</section>
      <section style={{margin:"500px"}} id="contact">contact</section>
    </div>
  );
}

export default App;
