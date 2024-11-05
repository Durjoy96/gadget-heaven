import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Statistics = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Statistics - Gadget Heaven</title>
      </Helmet>
      <div>
        <h1>Statistics Soon</h1>
      </div>
    </HelmetProvider>
  );
};

export default Statistics;
