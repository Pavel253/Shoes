/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Pagination.scss';

const Pagination = ({ itemsPerPage, totalItems, currentPage, onClick }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="li">
            <a onClick={() => onClick(pageNumber)} href="#" className={(pageNumber === currentPage ? " active" : "") + " page__link"} >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;