import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar"
import { SearchBar } from './components/SearchBar';
import { Overview } from './components/Overview';
function App() {
  return (
    <div className="flex">
      <Navbar/>
      <div>
        <SearchBar/>
        <Overview/>
      </div>
    </div>
  );
}

export default App;
