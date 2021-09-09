import React, { useEffect, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "boxicons";

export const educations = [
  "Degree", 
  "Engineering", 
  "MTech", 
  "Masters",
];
export const Technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Node JS",
  "Mongo DB",
];
export default function Dashboard() {
  const datetime = useRef();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [viewlink, setVielink] = useState(false);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [user, setUser] = useState(null);
  useEffect(() => {
    loadUser();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/user/${id}`);

    setUser(result.data.user);
  };

  const onSubmit = async (data) => {
    console.log("onsubmit--", data);
    if (id) {
      const gender = data.gender === "true" ? true : false;
      let userFormData = new FormData();
      userFormData.append("firstname", data.firstname);
      userFormData.append("lastname", data.lastname);
      userFormData.append("gender", gender);
      userFormData.append("education", data.education);
      userFormData.append("knownLanguages", data.knownLanguages);
      userFormData.append("bio", data.bio);
      for (var pair of userFormData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      const result = await axios.put(
        `http://localhost:8000/user/${id}`,
        userFormData,
        {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Methods": "*",
        }
      );
      if (result.data.message) alert(result.data.message);
      history.push("/");
    } else {
      console.log("data --else ", data);
      let bodyFormData = new FormData();
      bodyFormData.append("firstname", data.firstname);
      bodyFormData.append("lastname", data.lastname);
      bodyFormData.append("gender", data.gender);
      bodyFormData.append("education", data.education);
      bodyFormData.append("knownLanguages", data.knownLanguages);
      bodyFormData.append("bio", data.bio);
      console.log("bodyFormData -- ", bodyFormData);
      const result = await axios.post(
        "http://localhost:8000/user",
        bodyFormData,
        { "Content-Type": "multipart/form-data" }
      );
      if (result.data.message) alert(result.data.message);
      history.push("/");
      reset();
    }
  };

  return (
    <div className="container-fluid">
      <div
        className="card bg-light mb-3"
        style={{ maxWidth: "40rem", margin: "14px auto" }}
      >
        <div className="card-header" style={{ textAlign: "center" }}>
          <h4>Information Form</h4>
        </div>
        <div className="card-body">
          <div>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <div>
                  <label>First Name</label>
                  <input
                    className="form-control"
                    defaultValue={
                      id
                        ? setValue("firstname", user && user.firstname)
                        : ""
                    }
                    {...register("firstname", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors?.firstname?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors?.firstname?.type === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                  )}
                  {errors?.firstname?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}
                </div>
                <div>
                  <label>Laste Name</label>
                  <input
                    className="form-control"
                    defaultValue={
                      id
                        ? setValue(
                            "lastname",
                            user ? user.lastname : ""
                          )
                        : ""
                    }
                    {...register("lastname", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors?.lastname?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors?.lastname?.type === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                  )}
                  {errors?.lastname?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}
                </div>
              </div>
              <div className="row mb-2">
                <div>
                  <label>Education</label>
                  <select
                    className="form-select"
                    defaultValue={
                      id
                        ? setValue(
                            "education",
                            user && user.education
                          )
                        : ""
                    }
                    {...register("education", {
                      // validate: (val) => {
                      //   return val !== "";
                      // },
                    })}
                  >
                    <option value="">Choose...</option>
                    {educations.map((education) => (
                      <option key={education} value={education}>
                        {education}
                      </option>
                    ))}
                  </select>
                  {errors.education && <p>Please choose any one education</p>}
                </div>
                <div className="mt-3">
                  <label>Select Technologies</label>
                  {Technologies.map((tech) => (
                    <div className="technology" key={tech}>
                      <lable>
                        <input
                          className="form-check-input p-2"
                          type="checkbox"
                          value={tech}
                          aria-label="Checkbox for following text input"
                          {...register("knownLanguages", {
                            validate: (val) => {
                              console.log("val -", val.length);
                              if (!val.length && id) {
                                return true;
                              }
                              return !!val.length;
                            },
                          })}
                        />
                        {tech}
                      </lable>
                    </div>
                  ))}
                  {errors?.knownLanguages && <p>Please known languages</p>}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <label className="d-block">Gender</label>
                  <label className="radio-inline d-inline p-2">
                    <input
                      type="radio"
                      name="optradio"
                      {...register("gender")}
                      value={true}
                      defaultChecked={id ? user && user.gender : true}
                    />
                    Male
                  </label>
                  <label className="radio-inline d-inline p-2">
                    <input
                      type="radio"
                      name="optradio"
                      {...register("gender")}
                      value={false}
                      defaultChecked={
                        id ? !(user && user.gender) : false
                      }
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="col mb-2">
                <label>Tell me about yourself more</label>
                <textarea
                  className="form-control"
                  defaultValue={
                    id ? setValue("bio", user ? user.bio : "") : ""
                  }
                  {...register("bio", {
                    validate: (val) => {
                      return val !== "";
                    },
                  })}
                />
                {errors.bio && <p>Discribe yourself</p>}
              </div>
              <span className="d-grid d-md-flex justify-content-md-end">
                <input
                  type="submit"
                  className="btn btn-secondary me-md-2"
                  value="Submit"
                />
                <button
                  type="button"
                  className="btn btn-primary me-md-2"
                  onClick={() => setShow(true)}
                >
                  Share
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <h5>Send-Form</h5>
        </Modal.Header>
        <Modal.Body>
          Send via Link:
          <a href="mailto:?subject=Information Form,body=Information Form Link: http://localhost:3000">
            <button className="btn btn mr-3" onClick={() => setVielink(false)}>
              <box-icon name="mail-send"></box-icon>
            </button>
          </a>
          <button className="btn btn mr-3" onClick={() => setVielink(true)}>
            <box-icon name="link-alt"></box-icon>
          </button>
          <hr />
          {viewlink && "https://phanindhra2005.github.io/formdata/"}
        </Modal.Body>
        <Modal.Footer>
        {viewlink && <button
            type="button"
            className="btn btn-primary me-md-2"
            onClick={() => {navigator.clipboard.writeText("https://phanindhra2005.github.io/formdata/")}}
          >
            Copy Link
          </button>
        }
          <button
            type="button"
            className="btn btn-danger me-md-2"
            onClick={() => {setShow(false); setVielink(false)}}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
