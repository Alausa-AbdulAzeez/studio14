import { About, Hero, Navbar, WhyWhichride } from "../components";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyWhichride />
    </div>
  );
};

export default Home;
