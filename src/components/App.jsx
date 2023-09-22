import { Route, Routes } from "react-router-dom";
import { getTrending } from "./GetApi";
import Header from "./Header/Header";
import Home from "pages/Home/Home";
export const App = () => {
  return (<div>
<Header/>
    <Routes>
   <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
};


