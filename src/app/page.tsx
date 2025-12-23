import Image from "next/image";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import HeroSection from "./Components/Herosection";
import Aboutus from "./Components/Aboutus";
import Featuredworks from "./Components/Featuredworks";
import Services from "./Components/Services";
import Services2 from "./Components/Services2";
import Footer from './Components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Loader />
      <HeroSection /> 
      <Aboutus />
      <Services />
      <Featuredworks />
      <Services2 />
      <Footer />
    </>
  );
}
