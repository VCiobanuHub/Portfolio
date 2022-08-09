import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
