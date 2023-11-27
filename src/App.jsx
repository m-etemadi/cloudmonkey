import Header from './components/common/Header';
import HomeAboutContainer from './components/HomeAboutContainer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import ServicesContent from './components/Services/ServicesContent';
import Carousel from './components/Services/Carousel/Carousel';
import Contact from './components/Contact/Contact';
import Form from './components/Contact/Form';
import Map from './components/Contact/Map';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HomeAboutContainer>
          <Home />
          <About />
        </HomeAboutContainer>
        <Services>
          <ServicesContent />
          <Carousel />
        </Services>
        <Contact>
          <Form />
          <Map />
        </Contact>
      </main>
      <Footer />
    </>
  );
}

export default App;
