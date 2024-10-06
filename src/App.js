import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/Content/HeroSection';
import AboutUs from './components/Content/AboutUs';
import './index.css';
import ImageSlider from './components/Content/ImageSlider';
import Productos from './components/Content/Productos';
import ImageSlide from './components/Content/ImageSlide';
import HameStore from './components/Content/HameStore';
import Siguenos from './components/Content/Siguenos';
// import Products from './components/Content/Products';
// import FeaturedProducts from './components/Content/FeaturedProducts';
// import Footer from './components/Content/Footer';
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ImageSlider/>
      <Productos/>
      <ImageSlide/>
      {/* <FeaturedProducts /> */}
      <AboutUs />
      <HameStore />
      <Siguenos />
      {/* <Products />
      <Footer /> */}
    </>
  );
}

export default App;
