import React, { useState } from 'react'
import { useQuery } from "react-query";
import useGetPlanets from "../../hooks/useGetPlanets";
import Planet from '../Planet/Planet';

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["planets", page], useGetPlanets);

  return (
    <>
      <h2>Planets</h2>
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      {status === "error" && (
        <div>There was an error retreiving the data</div>
      )}
      {status === "loading" && (
        <div>Loading...</div>
      )}
      {status === "success" && (
        <>
          {data.results.map(planet => {
            return <Planet key={planet.name} planet={planet} />
          })}
        </>
      )}
    </>
  )
}

export default Planets;