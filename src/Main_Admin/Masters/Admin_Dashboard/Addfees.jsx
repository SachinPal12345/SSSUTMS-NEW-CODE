import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";

import * as Yup from "yup";

const CourseSchema = Yup.object().shape({
  selectedType: Yup.string().min(2).max(10).required("Course Type is required"),
  selectedCourse: Yup.string().required("Course is required"),
  selectedBranch: Yup.string().required("Branch is required"),
});
const initialValues = {
  selectedType: "",
  selectedCourse: "",
  selectedBranch: "",
};

function Addfees() {
  const { errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: CourseSchema,
    onSubmit: (values) => {
      handleSearch();
    },
  });

  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [eligible, setEligible] = useState("");
  const [eligibilityGradPer, setEligibilityGradPer] = useState("");

  const [errors2, setErrors2] = useState({
    selectedType: "",
    selectedCourse: "",
    selectedBranch: "",
  });

  const courseData = {
    UG: {
      courses: [
        "BACHELOR OF ENGINEERING",
        "BACHELOR OF DESIGN",
        "BACHELOR OF PHARMACY",
        "BACHELOR OF EDUCATION",
        "BACHELOR OF HOTEL MANAGEMENT AND CATERING",
        "BSC(Nursing) SEMESTER",
        "BACHELOR OF PHYSICAL EDUCATION(B. P. Ed.)",
        "BACHELOR OF ARTS BACHELOR OF EDUCATION (B. A. B. Ed.)",
      ],
      branches: {
        "BACHELOR OF ENGINEERING": [
          "AERONAUTICAL ENGINEERING",
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "ELECTRICAL AND ELECTRONICS ENGINEERING",
          "ELECTRICAL ENGINEERING",
          "ELECTRONICS AND COMMUNICATION ENGINEERING",
          "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
          "MECHANICAL ENGINEERING",
          "MINING ENGINEERING",
        ],
        "BSC(Nursing) SEMESTER": ["Nursing"],
        "BACHELOR OF PHARMACY": ["PHARMACY"],
        "BACHELOR OF PHYSICAL EDUCATION(B. P. Ed.)": [
          "BACHELOR OF PHYSICAL EDUCATION",
        ],
        "BACHELOR OF ARTS BACHELOR OF EDUCATION (B. A. B. Ed.)": [
          "BACHELOR OF ARTS BACHELOR OF EDUCATION",
        ],
        "BACHELOR OF HOTEL MANAGEMENT AND CATERING": [
          "HOTEL MANAGEMENT AND CATERING",
        ],

        "BACHELOR OF EDUCATION": ["BACHELOR OF EDUCATION"],
        "BACHELOR OF DESIGN": [
          "INDUSTRIAL DESIGN",
          "COMMUNICATION DESIGN",
          "TEXTILE DESIGN",
          "INTERIOR DESIGN",
          "PRODUCT DESIGN",
        ],
      },
    },
    PG: {
      courses: [
        "MASTER OF TECHNOLOGY",
        "MASTER OF PHARMACY",
        "MASTER OF BUSINESS ADMINISTRATION(MBA)",
        "MASTER OF COMPUTER APPLICATION(MCA)",
      ],
      branches: {
        "MASTER OF TECHNOLOGY": [
          "COMPUTER SCIENCE AND ENGINEERING",
          "COMPUTER TECHNOLOGY AND APPLICATION",
          "INFORMATION TECHNOLOGY",
          "SOFTWARE ENGINEERING",
          "DIGITAL COMMUNICATION",
          "ELECTRICAL POWER SYSTEM",
          "INDUSTRIAL DESIGN",
          "POWER ELECTRONICS",
          "STRUCTURAL DESIGN",
          "THERMAL ENGINEERING",
          "VLSI",
        ],
        "MASTER OF BUSINESS ADMINISTRATION(MBA)": ["MANAGEMENT"],
        "MASTER OF PHARMACY": ["PHARMACEUTICS", "PHARMACOLOGY"],
        "MASTER OF COMPUTER APPLICATION(MCA)": ["COMPUTER APPLICATION"],
      },
    },
    Diploma: {
      courses: ["DIPLOMA ENGINEERING", "DIPLOMA PHARMACY"],
      branches: {
        "DIPLOMA ENGINEERING": [
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "MECHANICAL ENGINEERING",
          "ELECTRICAL ENGINEERING",
        ],
        "DIPLOMA PHARMACY": ["PHARMACY"],
      },
    },
    PG_DIPLOMA: {
      courses: ["POST GRADUATION DIPLOMA IN COMPUTER APPLICATION"],
      branches: {
        "POST GRADUATION DIPLOMA IN COMPUTER APPLICATION": [
          "COMPUTER APPLICATION",
        ],
      },
    },
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedCourse("");
    setSelectedBranch("");
  };

  const handleCourseChange = (e) => {
    const courseValue = e.target.value;
    setSelectedCourse(courseValue);
    setErrors2((prevErrors) => ({
      ...prevErrors,
      selectedCourse: courseValue ? "" : "Course is required",
    }));
    setSelectedBranch("");
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSearch = () => {
    if (!selectedCourse) {
      setErrors2((prevErrors) => ({
        ...prevErrors,
        selectedCourse: "Course is required",
      }));
      return;
    }
  };

  return (
    <>
    <style>
      {`
      
      /* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "Poppins", sans-serif;
// }
// body {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   background: rgb(130, 106, 251);
// }
.container {
  position: relative;
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.container header {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-align: center;
}
.container .form {
  margin-top: 30px;
}
.form .input-box {
  width: 100%;
  margin-top: 20px;
}
.input-box label {
  color: #333;
}
.form :where(.input-box input, .select-box) {
  position: relative;
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}
.input-box input:focus {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}
.form .column {
  display: flex;
  column-gap: 15px;
}
.form .gender-box {
  margin-top: 20px;
}
.gender-box h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
}
.form :where(.gender-option, .gender) {
  display: flex;
  align-items: center;
  column-gap: 50px;
  flex-wrap: wrap;
}
.form .gender {
  column-gap: 5px;
}
.gender input {
  accent-color: rgb(130, 106, 251);
}
.form :where(.gender input, .gender label) {
  cursor: pointer;
}
.gender label {
  color: #707070;
}
.address :where(input, .select-box) {
  margin-top: 15px;
}
.select-box select {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: #707070;
  font-size: 1rem;
}
.form button {
  height: 55px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgb(130, 106, 251);
}
.form button:hover {
  background: rgb(88, 56, 250);
}
/*Responsive*/
@media screen and (max-width: 500px) {
  .form .column {
    flex-wrap: wrap;
  }
  .form :where(.gender-option, .gender) {
    row-gap: 15px;
  }
}
      `}
    </style>
    {/*-Coding By CodingLab | www.codinglabweb.com-*/}
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"  />
    {/*<title>Registration Form in HTML CSS</title>*/}
    {/*-Custom CSS File-*/}
    <link rel="stylesheet" href="style.css"   />
    <section className="container">
      {/* <header>Registration Form</header> */}
      <form action="#" className="form">
        {/* <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required="" />
        </div> */}
        {/* <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required="" />
        </div> */}
        {/* <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <div className="select-box">
              <select>
                <option hidden="">Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <div className="select-box">
              <select>
                <option hidden="">Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
          </div>
        </div> */}

            <div className="input-box">
            <label>Course Type</label>
            <div className="select-box">
            <select
  value={selectedType}
  onChange={handleTypeChange}
  id="course-type"
  name="course-type"
  className="custom-select"
>
  <option value="">Select Type</option>
  {Object.keys(courseData).map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
</select>
{errors.selectedType && touched.selectedType ? (
  <p className="error">{errors.selectedType}</p>
) : null}
            </div>
          </div>


          <div className="input-box">
            <label>Course Name</label>
            <div className="select-box">
            <select
                          value={selectedCourse}
                          onChange={handleCourseChange}
                          id="course-branch"
                          name="course-branch"
                          style={{
                            width: "100%",
                            height: "40px",
                            borderRadius: "5px",
                           
                          }}
                        >
                          <option value=""> Select Course </option>
                          {selectedType &&
                            courseData[selectedType].courses.map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                        </select>
                        {errors.selectedCourse && touched.selectedCourse ? (
                          <p className="error">{errors.selectedCourse}</p>
                        ) : null}
            </div>
          </div>


          <div className="input-box">
            <label>Branch</label>
            <div className="select-box">
            <select
                          
                          value={selectedBranch}
                          onChange={handleBranchChange}
                          id="course-branch"
                          name="course-branch"
                          style={{
                            width: "100%",
                            height: "40px",
                            borderRadius: "5px",
                          }}
                        >
                          <option value="">Select Branch</option>
                          {selectedCourse &&
                            courseData[selectedType].branches[
                              selectedCourse
                            ].map((branch) => (
                              <option key={branch} value={branch}>
                                {branch}
                              </option>
                            ))}
                        </select>
                        {errors.selectedBranch && touched.selectedBranch ? (
                          <p className="error">{errors.selectedBranch}</p>
                        ) : null}
            </div>
          </div>


          <div className="input-box">
            <label>Fees</label>
            <div className="select-box">
              <select>
                <option hidden="">Select Fees</option>
                <option>2300</option>
                <option>6700</option>
                <option>7800</option>
                <option>2345</option>
                
              </select>
            </div>
          </div>
      
       
      
         
       
      
        <button>Submit</button>
      </form>
    </section>
  </>
  
  )
}

export default Addfees