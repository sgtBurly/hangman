import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <router>
      <div className="App">
        <Navbar />
        <div className="contain">
          <Home />
        </div>
      </div>
    </router>
  );
}

export default App;
