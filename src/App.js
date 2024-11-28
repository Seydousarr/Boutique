
import './App.css';
import Boutique from './components/Boutique/Boutique';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      <header>
      <Menu></Menu>
      </header>
      <main>
        <Boutique></Boutique>
      </main>
      <footer>
      <p>&copy; 2024 Boutique en ligne</p>
      </footer>
    </>
  );
}

export default App;
