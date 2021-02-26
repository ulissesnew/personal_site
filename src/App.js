
import './App.scss';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import BigText from './components/BigText/BigText';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <div style={{margin: "100px"}}> </div>
          <BigText 
            small="About Me"
            title="Who am I"
            content="My name is John, I am 28 years old from USA, I am Hungry and ambitious.
                    Dreamer Graphic Designer and UI/UX Designer. I pratice everyday by reading
                    books and watching tutorials, I love my job very much and. I will
                    do my best to improve my skills, because my dream is to be a great
                    designer. "
            character="?"
          />
          
      </header>

     
    </div>
  );
}

export default App;
