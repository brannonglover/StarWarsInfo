import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import useGetPlanets from "../../hooks/useGetPlanets";
import Planet from "../Planet/Planet";
import Pagination from "../Pagination";
import strings from "../../common/strings";

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
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <>
          {resolvedData.results.map((planet: any) => {
            return <Planet key={planet.name} planet={planet} />;
          })}
        </>
      )}
    </>
  );
};

export default Planets;
