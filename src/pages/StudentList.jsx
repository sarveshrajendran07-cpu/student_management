import React, { useEffect, useState } from "react";
import axios from "axios";

import StudentTable from "../components/StudentTable";
import Pagination from "../components/Pagination";

function StudentList() {
  const [students, setStudents] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  // Fetch Students
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_STUDENT_API}api/getall`
      );

      setStudents(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_STUDENT_API}/api/delete/${id}`
      );

      fetchStudents();

      alert("Student Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const handleEdit = (id) => {
    alert(
      "Edit feature available in Add Student page 😎"
    );
  };

  // Pagination Logic
  const lastIndex = currentPage * recordsPerPage;

  const firstIndex = lastIndex - recordsPerPage;

  const currentStudents = students.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    students.length / recordsPerPage
  );

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>
        Student List
      </h2>

      <StudentTable
        students={currentStudents}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default StudentList;