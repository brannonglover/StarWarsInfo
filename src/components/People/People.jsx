import React, { useState } from 'react'
import { usePaginatedQuery } from "react-query";
import useGetPeople from "../../hooks/useGetPeople";
import Person from '../Person/Person';
import Pagination from '../Pagination';

const People = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(["people", page], useGetPeople);

  console.log(resolvedData);

  return (
    <>
      <h2>People</h2>
      <Pagination page={page} setPage={setPage} latestData={latestData} />
      {status === "error" && (
        <div>There was an error retreiving the data</div>
      )}
      {status === "loading" && (
        <div>Loading...</div>
      )}
      {status === "success" && (
        <>
          {resolvedData.results.map(person => {
            return <Person key={person.name} person={person} />
          })}
        </>
      )}
    </>
  )
}

export default People;