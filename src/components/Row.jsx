import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowId }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovie(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scroll-smoothe scrollbar-hide relative">
          {movie.map(
            (item, id) => item?.backdrop_path && <Movie item={item} key={id} />
          )}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
