import './App.css';
import Attempts from './components/Attempts/Attempts';
import Navbar from './components/Navbar/Navbar';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  return (
    <>
      <Navbar />
      <Attempts />
      <Keyboard />
    </>
  );
}

export default App;