import './App.css';
import Impact from './HomeComponents/Impact/Impact';
import Navbar from './HomeComponents/Navbar/Navbar';
import Programmes from './HomeComponents/Programmes/Programmes';
import Title from './HomeComponents/Title/Title';

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Impact />
      <Programmes />
    </div>
  );
}

export default App;
