import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NoteItem from './components/NoteItem/NoteItem';

function App() {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <Header />
          <NoteItem />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
