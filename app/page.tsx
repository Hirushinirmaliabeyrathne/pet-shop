import AboutDeutschlandpage from "@/components/aboutDeutschland";
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
   </>
  );
}
