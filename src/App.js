import Home from "./pages/Home";
import Footer from "./components/footer";
import HangmanContext from "./context/HangmanContext";

function App() {
  return (
    <div className="App">
      <HangmanContext>
        <Home />
        <Footer />
      </HangmanContext>
    </div>
  );
}

export default App;
