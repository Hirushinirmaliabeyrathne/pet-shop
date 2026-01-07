import AboutDeutschlandpage from "@/components/aboutDeutschland";
import Dogbreedingservices from "@/components/dogbreedingservices";
import Herosection from "@/components/Herosection";
import NavbarPage from "@/components/Navbar";
import Ourachivementpage from "@/components/Ourachivement";


export default function Home() {
  return (
   <>
   <NavbarPage/>
    <Herosection/>
    <AboutDeutschlandpage/>
    <Ourachivementpage/>
    <Dogbreedingservices/>
   </>
  );
}
