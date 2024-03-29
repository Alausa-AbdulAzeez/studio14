import { About, Hero, Navbar, WhyWhichride } from "../components";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyWhichride />
      <Footer />
    </div>
  );
};

export default Home;
