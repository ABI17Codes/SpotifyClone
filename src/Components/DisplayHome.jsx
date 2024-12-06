import React from "react";
import Navbar from "./Navbar";
import Albumitem from "./Albumitem";
import { albumsData, songsData } from "@/assets/assets";
import Songsitem from "./Songsitem";

const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 flex font-bold text-2xl">Feature Charts</h1>
        <div className="flex overflow-auto scroll-">
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 flex font-bold text-2xl">Today biggest hits</h1>
        <div className="flex overflow-auto scroll-">
          {songsData.map((item, index) => (
            <Songsitem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
