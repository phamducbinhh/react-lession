import React, { useRef } from "react";
import lodash from "lodash";

const API_URL = "https://hn.algolia.com/api/v1/search?query=react";
const HackerNew = () => {
  const [hits, setHits] = React.useState([]);
  const [query, setQuery] = React.useState("react");
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [url, setUrl] = React.useState(`${API_URL}&query=${query}`);

  //useRef để fix lỗi warning
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      //call api
      const respones = await fetch(`${API_URL}&query=${query}`);
      const result = await respones.json();
      setHits(result.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`the error ${error.message}`);
    }
  };

  //xử lý debounce
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          className="border border-grey-200 p-5 block w-full rounded-md outline-none transition-all duration-500 ease-in-out"
          defaultValue={query}
          onChange={handleUpdateQuery}
        />

        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md hover:bg-slate-600"
          onClick={() => setUrl(`${API_URL}&query=${query}`)}
        >
          Fetching Data
        </button>
      </div>
      {!loading && (
        <div className="loading w-8 h-8 rounded-full  border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading && errorMessage && <div>{errorMessage}</div>}
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-sm">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNew;
