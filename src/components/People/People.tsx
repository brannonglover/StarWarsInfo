import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import useGetPeople from "../../hooks/useGetPeople";
import Person from "../Person/Person";
import Pagination from "../Pagination";
import strings from "../../common/strings";

const People = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["people", pageNumber],
    useGetPeople
  );

  return (
    <>
      <h2>{strings.PEOPLE}</h2>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        latestData={latestData}
      />
      {status === "error" && <div>{strings.ERROR}</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <>
          {resolvedData.results.map((person: any) => {
            return <Person key={person.name} person={person} />;
          })}
        </>
      )}
    </>
  );
};

export default People;
