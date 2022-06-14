import './App.css';
import Attempts from './components/Attempts/Attempts';
import Navbar from './components/Navbar/Navbar';
import Keyboard from './components/Keyboard/Keyboard';
import { AttemptsProvider } from './context/AttemptsContext';

function App() {
  return (
    <AttemptsProvider>
      <Navbar />
      <Attempts />
      <Keyboard />
    </AttemptsProvider>
  );
}

export default App;