import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <Main />
    </div>
  );
}

export default App;
