import React, { useEffect, useState } from "react";
import axios from "axios";

import StudentTable from "./StudentTable";
import Pagination from "./Pagination";

import "./Student.css";

function StudentForm() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    year: "",
    department: "",
    gender: "",
  });

  const [editId, setEditId] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  // ================= GET ALL STUDENTS =================

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_STUDENT_API}/api/getall`
      );

      console.log(response.data);

      setStudents(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ================= CREATE & UPDATE =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.post(
          `${process.env.REACT_APP_STUDENT_API}/api/update/${editId}`,
          formData
        );

        alert("✅ Student Updated Successfully");
      } else {
        await axios.post(
          `${process.env.REACT_APP_STUDENT_API}/api/create`,
          formData
        );

        alert("✅ Student Added Successfully");
      }

      // Refresh Table
      fetchStudents();

      // Clear Form
      setFormData({
        name: "",
        rollno: "",
        year: "",
        department: "",
        gender: "",
      });

      setEditId(null);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= EDIT =================

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(
        `http://92.205.109.210:8051/api/getbyid/${id}`
      );

      console.log(response.data);

      const student = response.data.data[0];

      setFormData({
        name: student.name || "",
        rollno: student.rollno || "",
        year: student.year || "",
        department: student.department || "",
        gender: student.gender || "",
      });

      setEditId(id);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE =================

  const handleDelete = async (id) => {
    try {
      await axios.post(
        `http://92.205.109.210:8051/api/delete/${id}`
      );

      alert("✅ Student Deleted Successfully");

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= PAGINATION =================

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
      {/* ================= FORM ================= */}

      <div className="form-card">
        <h2>
          {editId
            ? "Update Student"
            : "Add Student"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Roll Number"
            value={formData.rollno}
            onChange={(e) =>
              setFormData({
                ...formData,
                rollno: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Year"
            value={formData.year}
            onChange={(e) =>
              setFormData({
                ...formData,
                year: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
            required
          />

          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
            required
          >
            <option value="">
              Select Gender
            </option>

            <option value="male">Male</option>

            <option value="female">
              Female
            </option>
          </select>

          <button type="submit">
            {editId
              ? "Update Student"
              : "Add Student"}
          </button>
        </form>
      </div>

      {/* ================= TABLE ================= */}

      <StudentTable
        students={currentStudents}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {/* ================= PAGINATION ================= */}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default StudentForm;