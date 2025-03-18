import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Calculator from './_components/Calculator';
import Contact from './_components/Contact';
import Footer from './_components/Footer';
import Gallery from './_components/Gallery';
import Hero from './_components/Hero';
import Navbar from './_components/Navbar';
import Pricing from './_components/Pricing';
import Sessions from './_components/Sessions';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sessions />
      <Gallery />
      <Pricing />
      <Contact />
      <Calculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center' />
    </>
  );
}

export default App;
