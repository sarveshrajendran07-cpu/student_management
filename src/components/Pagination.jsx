import React from "react";

function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
<<<<<<< HEAD
        onClick={() => setCurrentPage(currentPage - 1)}
=======
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
      >
        Prev
      </button>

<<<<<<< HEAD
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={
            currentPage === index + 1 ? "active-page" : ""
          }
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
=======
      {[...Array(totalPages)].map(
        (_, index) => (
          <button
            key={index}
            className={
              currentPage ===
              index + 1
                ? "active-page"
                : ""
            }
            onClick={() =>
              setCurrentPage(index + 1)
            }
          >
            {index + 1}
          </button>
        )
      )}

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;