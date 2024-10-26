import React from "react";
import InnerBanner from "../Components/InnerBanner";
import OurSolution from "../Components/OurSolution";

const Technologies = () => {
  return (
    <>
      <InnerBanner title={"Technologies"} />
      <div className="container">
        <div className="contentpart ">
          <h2>
            <span>Technologies</span>{" "}
          </h2>
        </div>
        <OurSolution />
      </div>
    </>
  );
};

export default Technologies;
