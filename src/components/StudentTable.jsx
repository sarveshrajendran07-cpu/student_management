import React from "react";

function StudentTable({
  students,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Year</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>

                <td>{student.name}</td>

                <td>{student.rollno}</td>

                <td>{student.year}</td>

                <td>{student.department}</td>

                <td>{student.gender}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(student.studentId)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(student.studentId)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                No Students Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;