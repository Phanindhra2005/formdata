import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    status: "",
    education: "",
    dob: "",
    knownLanguages: [""],
    bio: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8000/user/${id}`, {
      "Access-Control-Allow-Origin": "*",
    });
    setUser(res.data.user);
    console.log("data set user--",res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-light" to="/">
      <box-icon type='solid' name='home' animation='tada' color={"#fffff"}></box-icon>
      ...To Home</Link>
      <br />
      <br />
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg">
              <div className="about-text go-to">
                <h4 className="card-title">
                  User Name:
                  <b>
                    {" "}
                    {user["firstname"].toUpperCase()}{" "}
                    {user["lastname"].toUpperCase()}
                  </b>
                </h4>
                <div className="">
                  <div className="">
                    <div className="media">
                      <label>First Name: {user["firstname"]}</label>
                      <p></p>
                    </div>
                    <div className="media">
                      <label>Last Name: {user["lastname"]}</label>
                      <p></p>
                    </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>Education: {user.education}</label>
                      <p></p>
                    </div>
                    <div className="media">
                    <div className="media">
                      <label>Known Languages: {user.knownLanguages}</label>
                      <p></p>
                    </div>
                  </div>
                      <label>Gender: {user.gender ? "Male" : "Female"}</label>
                      <p></p>
                    </div>
                    <div className="media">
                      <label>DOB: {user.dob}</label>
                      <p></p>
                    </div>
                  </div>
                  <label>Bio:</label>
                  <p style={{marginLeft:"5px"}}>{user.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
