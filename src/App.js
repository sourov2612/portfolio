import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Skils from "./Component/Skils/Skils";
import Works from "./Component/Works/Works";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
      <Intro></Intro> 
      <Skils></Skils>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
