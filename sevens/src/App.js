import NavBar from "./components/NavBar";
import "./components/NavBar.css"
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Home />
      </main>
      <Footer />
      </div>
  );
}

export default App;
