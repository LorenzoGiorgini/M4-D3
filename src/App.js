import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import horror from "./data/horror (1).json"

function App() {
  return (
    <div>
      <BookList prop={horror}/>
    </div>
  );
}

export default App;