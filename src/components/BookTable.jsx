import React from "react";

function BookTable({
  books,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Book ID</th>

            <th>Title</th>

            <th>Author</th>

            <th>Genre</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>

                <td>{book.title}</td>

                <td>{book.author}</td>

                <td>{book.genre}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(book)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(
                        book.bookId
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                No Books Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;