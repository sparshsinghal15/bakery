import React from "react";

import Catalogue from "./catalogue/catalogue";
import Categories from "./categories";

const Main = () => {
  return (
    <div className="main p-3">
      <Categories />
      <Catalogue />
    </div>
  );
};

export default Main;
