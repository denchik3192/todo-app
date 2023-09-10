import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NoteItem from './components/NoteItem/NoteItem';

function App() {
  const { notes, weather } = useSelector((state) => state.notes);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          {Object.values(notes)?.map((note) => (
            <NoteItem {...note} key={note.id} weather={weather} />
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
