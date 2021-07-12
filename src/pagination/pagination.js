import React from 'react';
import './pagination.css';

const Pagination = ({ dataInPage, data, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data / dataInPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;