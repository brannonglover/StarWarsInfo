import React from 'react'
import { useQuery } from "react-query";
import useGetPeople from "../../hooks/useGetPeople";
import Person from '../Person/Person';

const People = () => {
  const { data, status } = useQuery("people", useGetPeople);

  return (
    <>
      <h2>People</h2>
      {status === "error" && (
        <div>There was an error retreiving the data</div>
      )}
      {status === "loading" && (
        <div>Loading...</div>
      )}
      {status === "success" && (
        <>
          {data.results.map(person => {
            return <Person key={person.name} person={person} />
          })}
        </>
      )}
    </>
  )
}

export default People;