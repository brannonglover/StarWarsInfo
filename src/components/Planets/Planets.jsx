import React, { useState } from 'react'
import { usePaginatedQuery } from "react-query";
import useGetPlanets from "../../hooks/useGetPlanets";
import Planet from '../Planet/Planet';
import Pagination from '../Pagination';

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(["planets", page], useGetPlanets);

  console.log(resolvedData, latestData);

  return (
    <>
      <h2>Planets</h2>
      <Pagination page={page} setPage={setPage} latestData={latestData} />
      {status === "error" && (
        <div>There was an error retreiving the data</div>
      )}
      {status === "loading" && (
        <div>Loading...</div>
      )}
      {status === "success" && (
        <>
          {resolvedData.results.map(planet => {
            return <Planet key={planet.name} planet={planet} />
          })}
        </>
      )}
    </>
  )
}

export default Planets;