import React from "react";
import strings from "../common/strings";

interface IPagination {
  pageNumber: number;
  setPageNumber: (value: number | ((prevState: number) => number)) => void;
  latestData: any;
}

const Pagination: React.FC<IPagination> = (props: IPagination) => {
  const { pageNumber, setPageNumber, latestData } = props;

  return (
    <>
      <button
        disabled={pageNumber === 1}
        onClick={() => setPageNumber((old: number) => Math.max(old - 1, 1))}
      >
        {strings.PREVIOUS}
      </button>
      <span>{pageNumber}</span>
      <button
        disabled={!latestData || !latestData.next}
        onClick={() =>
          setPageNumber((old) =>
            !latestData || !latestData.next ? old : old + 1
          )
        }
      >
        {strings.NEXT}
      </button>
    </>
  );
};

export default Pagination;
