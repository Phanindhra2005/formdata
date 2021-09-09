import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import "boxicons";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/user");
    console.log(result);
    setUsers(result.data.users);
  };

  const deleteUser = async (id) => {
    const result = await axios.delete(`http://localhost:8000/user/${id}`, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
    });
    if (result.status === 200) {
      loadUsers();
    }
  };

  return (
    <div className="container">
       <Link to="/">
          <button type="button" className="btn btn-primary">New Form</button>
        </Link>
      <div className="py-4">
        <h2>
          <b>User Data</b>
        </h2>
        <Table
          striped
          hover
          variant="light"
          className="table border shadow"
        >
          <thead className="thead-light">
            <tr>
              <th scope="col">First-Name</th>
              <th scope="col">Last-Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Occupation</th>
              <th scope="col" style={{textAlign:"center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{user["firstname"]}</td>
                <td>{user["lastname"]}</td>
                <td>{user.gender ? "Male" : "Female"}</td>
                <td>{user.occupation}</td>
                <td style={{textAlign:"center"}}>
                <Link
                    className="btn btn mr-3"
                    to={`/user/${user._id}`}
                  >
                    <box-icon name="show-alt" rotate="180" color="">
                      View
                    </box-icon>
                  </Link>
                  <Link
                    className="btn btn-danger-outline"
                    to="/Home"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this customer?"
                        )
                      ) {
                        deleteUser(user._id);
                      }
                    }}
                  >
                    <box-icon name="trash-alt" type="solid" color="">
                      Delete
                    </box-icon>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
