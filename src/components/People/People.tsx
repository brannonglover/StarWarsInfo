import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import useGetPeople from "../../hooks/useGetPeople";
import Person from "../Person/Person";
import Pagination from "../Pagination";
import strings from "../../common/strings";
import { IPerson } from "../../common/types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
          {resolvedData.results.map((person: IPerson) => {
            return <Person key={person.name} person={person} />;
          })}
        </>
      )}
    </>
  );
};

export default People;
