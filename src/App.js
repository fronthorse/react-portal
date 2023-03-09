import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [editingIndex, seteditingIndex] = useState(null);
  const [students, setstudents] = useState([]);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      const newStudent = {
        firstName,
        lastName,
        userName,
        password,
        email,
        phoneNumber,
        gender,
        dateOfBirth,
      };
      setstudents([...students, newStudent]);
    } else {
      const newStudents = [...students];
      newStudents[editingIndex] = {
        firstName,
        lastName,
        userName,
        password,
        email,
        phoneNumber,
        gender,
        dateOfBirth,
      };
      setstudents(newStudents);
      seteditingIndex(null);
    }

    setfirstName("");
    setpassword("");
    setlastName("");
    setuserName("");
    setgender("");
    setphoneNumber("");
    setemail("");
    setdateOfBirth();
  };

  const handleEdit = (index) => {
    const student = students[index];
    setuserName(student.userName);
    setemail(student.email);
    setfirstName(student.firstName);
    setlastName(student.lastName);
    setphoneNumber(student.phoneNumber);
    setpassword(students.password);
    seteditingIndex(index);
  };
  const handleDelete = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setstudents(newStudents);
  };

  return (
    <div className="App container">
      <div
        className=" mt-2 mx-auto rounded border border-success"
        style={{
          width: "400px",
          backgroundColor: "rgb(194,206,206)",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <h1 className="text-success">Student Portal</h1>

        <form
          action=""
          style={{ width: "maxContent" }}
          onSubmit={handleSignUp}
          className="h-75  text-start p-2"
        >
          <h5 className="text-muted">Sign-Up Form</h5>
          <label htmlFor="firstname" className="form-label">
            <h6>FirstName</h6>
          </label>
          <input
            className="form-control"
            placeholder="Enter First name"
            type="text"
            value={firstName}
            onChange={(event) => setfirstName(event.target.value)}
          />
          <label htmlFor="lastname" className="form-label">
            <h6>LastName</h6>
          </label>
          <input
            className="form-control"
            placeholder="Enter Last name"
            type="text"
            value={lastName}
            onChange={(event) => setlastName(event.target.value)}
          />
          <label htmlFor="email" className="form-label">
            <h6>Email</h6>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
          <label htmlFor="phoneNumber" className="form-label">
            <h6>Phone Number</h6>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(event) => setphoneNumber(event.target.value)}
          />
          <label htmlFor="username" className="form-label">
            <h6>Username</h6>
          </label>
          <input
            className="form-control"
            placeholder="Enter Username"
            type="text"
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
          />
          <label htmlFor="password" className="form-label">
            <h6>Password</h6>
          </label>
          <input
            className="form-control"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />
          <button type="submit" className="btn btn-success m-2 mx-auto">
            Sign Up
          </button>
          <br />
          <p className="">
            Already have an account ? <a href="">Sign In</a>
          </p>
        </form>
      </div>

      <div
        className="mx-auto container"
        style={{
          width: "100%",
        }}
      >
        <table className=" w-100">
          <thead className="">
            <tr className="">
              <th className="p-3">FIRST NAME</th>
              <th className=" p-3">LAST NAME</th>
              <th className=" p-3">EMAIL</th>
              <th className=" p-3">PHONE NUMBER</th>
              <th className="p-3">USERNAME</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="">{student.firstName}</td>
                <td className="">{student.lastName}</td>
                <td className="">{student.email}</td>
                <td className="">{student.phoneNumber}</td>
                <td className="">{student.userName}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning mx-1"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
