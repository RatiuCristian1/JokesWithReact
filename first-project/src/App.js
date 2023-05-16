import './App.css';
import Navbar from './components/Navbar';
import { Carousel } from './Carousel';

function App() {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        {/* <Main /> */}
        <div className='App'>
            <Carousel />
        </div>
    </div>
  );
}

export default App;
