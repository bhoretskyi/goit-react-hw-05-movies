import React, { useEffect, useState } from "react";
import { getTrending } from "components/GetApi";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getTrending();

        setData(resp); 
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <ul>
        {data.map((item) => (
          <Link key={item.id} to={`/movies/${item.id}`}> <li>{item.title}</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
