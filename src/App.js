
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import About from "./pages/About/About"


function App() {
  return (
    <div className="App">
          <Navbar/>
         <Home />
         <About/>


        
    </div>
  );
}

export default App;
