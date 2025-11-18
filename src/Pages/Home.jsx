import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col p-[50px] gap-[15px] bg-gray-300">
      <h2>Home Page</h2>
      <Header />
      <div className="flex flex-col gap-[10px] bg-yellow-300 p-[10px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
