// import React, {
//   useEffect,
//   useState,
// } from "react";

// import axios from "axios";

// import {
//   useNavigate,
// } from "react-router-dom";

// import BookTable from "../components/BookTable";

// import Pagination from "../components/Pagination";

// import "../components/Library.css";

// function Dashboard({
//   setIsLoggedIn,
// }) {
//   const navigate = useNavigate();

//   const [books, setBooks] = useState([]);

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       author: "",
//       genre: "",
//     });

//   const [editId, setEditId] =
//     useState(null);

//   // Pagination
//   const [currentPage, setCurrentPage] =
//     useState(1);

//   const recordsPerPage = 5;

//   // ================= GET BOOKS =================

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(
//         "http://92.205.109.210:8051/library/getall"
//       );

//       console.log(response.data);

//       setBooks(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // ================= ADD / UPDATE =================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editId) {
//         await axios.post(
//           `http://92.205.109.210:8051/library/update/${editId}`,
//           formData
//         );

//         alert("✅ Book Updated");
//       } else {
//         await axios.post(
//           "http://92.205.109.210:8051/library/create",
//           formData
//         );

//         alert("✅ Book Added");
//       }

//       fetchBooks();

//       setFormData({
//         title: "",
//         author: "",
//         genre: "",
//       });

//       setEditId(null);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ================= EDIT =================

//   const handleEdit = (book) => {
//     setFormData({
//       title: book.title,
//       author: book.author,
//       genre: book.genre,
//     });

//     setEditId(book.bookId);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // ================= DELETE =================

//   const handleDelete = async (id) => {
//     try {
//       await axios.post(
//         `http://92.205.109.210:8051/library/delete/${id}`
//       );

//       alert("✅ Book Deleted");

//       fetchBooks();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ================= LOGOUT =================

//   const handleLogout = () => {
//     localStorage.removeItem(
//       "isLoggedIn"
//     );

//     setIsLoggedIn(false);

//     navigate("/login");
//   };

//   // ================= PAGINATION =================

//   const lastIndex =
//     currentPage * recordsPerPage;

//   const firstIndex =
//     lastIndex - recordsPerPage;

//   const currentBooks = books.slice(
//     firstIndex,
//     lastIndex
//   );

//   const totalPages = Math.ceil(
//     books.length / recordsPerPage
//   );

//   return (
//     <div className="dashboard">
//       {/* TOP BAR */}

//       <div className="top-bar">
//         <h2>
//           Library Dashboard 📚
//         </h2>

//         <button
//           className="logout-btn"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>

//       {/* FORM */}

//       <div className="form-card">
//         <h2>
//           {editId
//             ? "Update Book"
//             : "Add Book"}
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Book Title"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 title: e.target.value,
//               })
//             }
//             required
//           />

//           <input
//             type="text"
//             placeholder="Author"
//             value={formData.author}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 author: e.target.value,
//               })
//             }
//             required
//           />

//           <input
//             type="text"
//             placeholder="Genre"
//             value={formData.genre}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 genre: e.target.value,
//               })
//             }
//             required
//           />

//           <button type="submit">
//             {editId
//               ? "Update Book"
//               : "Add Book"}
//           </button>
//         </form>
//       </div>

//       {/* TABLE */}

//       <BookTable
//         books={currentBooks}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//       />

//       {/* PAGINATION */}

//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// }

// export default Dashboard;