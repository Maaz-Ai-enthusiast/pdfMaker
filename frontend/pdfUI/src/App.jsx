import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons"; // Import SocialIcons

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Home Content */}
      <Home />

      {/* Social Icons Tray */}
      <SocialIcons /> {/* Add the SocialIcons component here */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
