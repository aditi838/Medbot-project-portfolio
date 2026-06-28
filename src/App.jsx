import "./styles/globals.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Architecture from "./components/Architecture";
import Features from "./components/Features";
import Evaluation from "./components/Evaluation";
import Challenges from "./components/Challenges";
import Lessons from "./components/Lessons";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Architecture />
      <Features />
      <Evaluation />
      <Challenges />
      <Lessons />
      <Footer />
    </>
  );
}
