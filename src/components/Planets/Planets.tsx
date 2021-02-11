import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import useGetPlanets from "../../hooks/useGetPlanets";
import Planet from "../Planet/Planet";
import Pagination from "../Pagination";
import strings from "../../common/strings";
import { IPlanet } from "../../common/types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Planets = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", pageNumber],
    useGetPlanets
  );

  return (
    <>
      <h2>{strings.PLANETS}</h2>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        latestData={latestData}
      />
      {status === "error" && <div>{strings.ERROR}</div>}
      {status === "loading" && (
        <div>
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {status === "success" && (
        <>
          {resolvedData.results.map((planet: IPlanet) => {
            return <Planet key={planet.name} planet={planet} />;
          })}
        </>
      )}
    </>
  );
};

export default Planets;
