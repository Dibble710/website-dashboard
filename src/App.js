import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logs from "./pages/Logs"


function App() {
  return (
    <Router>
    <div className="h-screen">
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
