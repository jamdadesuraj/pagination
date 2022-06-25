import React, { useEffect, useState } from "react";
import Pagination from "./Paginaton";

const Main = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
      res.json().then((data) => {
        setImages(data);
      })
    );
  }, []);

  return (
    <div>
      <Pagination data={images} />
    </div>
  );
};

export default Main;
