import React from 'react';

const Pagination = ({ page, setPage, latestData }) => {
  return (
    <>
      <button 
        disabled={page === 1} 
        onClick={() => setPage(old => Math.max(old - 1, 1))}
      >Previous</button>
      <span>{page}</span>
      <button 
        disabled={!latestData || !latestData.next} 
        onClick={() => setPage(old => !latestData || !latestData.next ? old : old + 1)}
      >Next</button>
    </>
  )
}

export default Pagination;