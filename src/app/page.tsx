import Image from "next/image";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import HeroSection from "./Components/Herosection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Loader />
      <HeroSection />

    </>
  );
}
