import AboutDeutschlandpage from "@/components/aboutDeutschland";
import CommentsPage from "@/components/comments";
import Dogbreedingservices from "@/components/dogbreedingservices";
import GoogleMap from "@/components/GoogleMap";
import Herosection from "@/components/Herosection";
import NavbarPage from "@/components/Navbar";
import Ourachivementpage from "@/components/Ourachivement";
import Ourpuppymoments from "@/components/Ourpuppymoments";
import QuestionsPage from "@/components/questions";
import Storyofpuppies from "@/components/storyofpuppies";
import FooterPage from "./footer/FooterPage";


export default function Home() {

  return (
   <>
   <NavbarPage/>
    <Herosection/>
    <AboutDeutschlandpage/>
    <Ourachivementpage/>
    <Dogbreedingservices/>
    <Ourpuppymoments/>
    <Storyofpuppies/>
    <CommentsPage/>
    <QuestionsPage/>
    <GoogleMap  />
    <FooterPage/>
   </>
  );
}
