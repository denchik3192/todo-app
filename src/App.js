import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NoteItem from './components/NoteItem/NoteItem';

function App() {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="wrapper">
          {Object.values(notes)?.map((note) => (
            <NoteItem {...note} key={note.id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
