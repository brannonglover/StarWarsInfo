import React, { useState } from 'react'
import { usePaginatedQuery } from "react-query";
import useGetPlanets from "../../hooks/useGetPlanets";
import Planet from '../Planet/Planet';
import Pagination from '../Pagination';
import strings from '../../strings';

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(["planets", page], useGetPlanets);

  return (
    <>
      <h2>{strings.PLANETS}</h2>
      <Pagination page={page} setPage={setPage} latestData={latestData} />
      {status === "error" && (
        <div>{strings.ERROR}</div>
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