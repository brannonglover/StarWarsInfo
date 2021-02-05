import React from 'react';

const Pagination = ({ page, setPage, latestData }) => {
  return (
    <>
      <button onClick={() => setPage(old => Math.max(old - 1, 1))}>Previous</button>
      <span>{page}</span>
      <button onClick={() => setPage(old => !latestData || !latestData.next ? old : old + 1)}>Next</button>
    </>
  )
}

export default Pagination;