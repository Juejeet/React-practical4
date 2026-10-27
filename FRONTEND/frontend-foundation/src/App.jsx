import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getAllStudents } from "./api/studentApi";
import { deleteStudent } from "./api/studentApi";
import SearchBar from "./components/SearchBar";
import "./App.css";


function App() {
  
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(
  (s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
);

  const fetchStudents = async () => {
    const res = await getAllStudents();
    setStudents(res.data);
  };
  const handleDelete = async (id) => {
  await deleteStudent(id);
  fetchStudents();
  };
  // Pass to StudentList:
  

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm
        onStudentAdded={fetchStudents}
        editingStudent={editingStudent}
        clearEdit={() => setEditingStudent(null)}
      />

      {/* <StudentList
        students={students}
        onEdit={setEditingStudent}
        onDelete={handleDelete}
      /> */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <StudentList
        students={filteredStudents}
        onEdit={setEditingStudent}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;