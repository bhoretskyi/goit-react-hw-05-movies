import React, { useEffect, useState } from "react";
import { getTrending } from "components/GetApi";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation()
  

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
          <Link key={item.id} to={`/movies/${item.id}`} state={{from : location}}> <li>{item.title}</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
