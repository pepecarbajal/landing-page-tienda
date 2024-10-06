import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/Content/HeroSection';
import FeaturedProducts from './components/Content/FeaturedProducts';
import AboutUs from './components/Content/AboutUs';
import Footer from './components/Content/Footer';
import './index.css';
import Products from './components/Content/Products';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
      <Products />
      <Footer />
    </>
  );
}

export default App;
