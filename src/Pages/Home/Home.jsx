// APP COMPONENTS
import Footer from "../../Components/Footer/Footer";
import MainNavbar from "../../Components/Navbar/Navbar";
import Banner from "../../UI_Elements/Banner/Banner";
import PopularServicesSlider from "../../UI_Elements/PopularServicesSlider/PopularServicesSlider";

const Home = () => {
  return <>
    <MainNavbar />
    <Banner />
    <PopularServicesSlider/>
    <Footer />
  </>
}

export default Home;