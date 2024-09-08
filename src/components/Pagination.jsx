import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5; // Maximum number of page numbers to display
    const totalAdjacentPageNumbers = maxPageNumbers - 2; // Subtracting 2 for the first and last page

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = currentPage - Math.floor(totalAdjacentPageNumbers / 2);
      const endPage = currentPage + Math.floor(totalAdjacentPageNumbers / 2);

      if (startPage <= 1) {
        for (let i = 1; i <= maxPageNumbers - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (endPage >= totalPages) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - (maxPageNumbers - 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div style={{ marginRight: 20 }}>
      {getPageNumbers().map((pageNumber, index) => (
        <span
          key={index}
          onClick={() => onPageChange(pageNumber)}
          style={{
            cursor: "pointer",
            marginRight: "5px",
            padding:7,
            fontSize: 18,
            borderRadius:5,
            border: pageNumber==="..."?"0px solid #d8d0d0": ".5px solid #d8d0d0",
            fontWeight: pageNumber === currentPage ? "bold" : "normal",
          }}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
