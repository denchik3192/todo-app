import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NoteItem from './components/NoteItem/NoteItem';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
