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
        <Carousel />
    </div>
  );
}

export default App;
