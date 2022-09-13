import React, { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Photos = () => {
  //sử dụng async await để call api
  /**
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  //call api
  const getRandomPhotos = async () => {
    const response = await fetch(`${API_URL} ${page} &limit=8 `);

    const data = await response.json();
    setPhotos(data);
  };

  const loadMorePhotos = () => {};

  //useEffect
  useEffect(() => {
    getRandomPhotos(photos);
  }, []);
   */
  const getRandomPhotos = (page) => {
    //sử dụng axios promise để call api
    return axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //useState is a hook that allows us to create a state variable
  const [photos, setPhotos] = useState([]);

  const [page, setPage] = useState(1);
  //useEffect is a hook that runs after the component is rendered
  //click load more

  // const loadMorePhotos = () => {
  //   getRandomPhotos(page).then((images) => {
  //     const newPhotos = [...photos, ...images];
  //     setPhotos(newPhotos);
  //     setPage(page + 1);
  //   });
  // };
  //viết dưới dạng async await
  const loadMorePhotos = useRef({});
  loadMorePhotos.current = async () => {
    const images = await getRandomPhotos(page);
    const newPhotos = [...photos, ...images];
    setPhotos(newPhotos);
    setPage(page + 1);
  };

  useEffect(() => {
    loadMorePhotos.current();
  }, []);
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-5 p-5">
          {photos.length > 0 &&
            photos.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-white shadow-md rounded-lg h-[200px]"
              >
                <img
                  src={item.download_url}
                  alt={item.author}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
        </div>
        <div className="text-center">
          <button
            className="inline-block px-8 py-4 bg-purple-600 text-white"
            onClick={loadMorePhotos.current}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photos;
