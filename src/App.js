import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from "./components/footer";
import HangmanContext from "./context/HangmanContext";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Navbar />
      <HangmanContext>
        <Home />
        <Footer />
      </HangmanContext>
        </BrowserRouter>
    </div>
  );
}

export default App;
