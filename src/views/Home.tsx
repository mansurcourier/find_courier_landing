import React from "react";
import { Carousel, Footer } from "../components";

const Home = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <Carousel />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
