import React from "react";
import "../components/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function AchievementForm() {
  const initialValues = {
    title: "",
    description: "",
    type: "",
    provider: "",
    date: "",
    duration: "",
    platform: "",
    certificateURL: "",
    skills: "",
    internshiptitle: "",
    company: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
    achievements: "",
    supervisor: "",
    feedback: "",
    certificate: "",
    examName: "",
    examDate: "",
    score: "",
    rank: "",
    percentile: "",
  };


  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(2, "Title must be at least 2 characters")
      .max(20, "Title must be less than 20 character"),
    description: Yup.string().required("Achievement Description is required").max(50, "Description should contain less than 50 character."),
    type: Yup.string().required("Type of achievement is required"),
    provider: Yup.string().required("Provider is required"),
    date: Yup.date().required("Date of achievement is required").max(new Date(),"Achievement/Certification/Course completion date cannot be in the future"),
    duration: Yup.string()
      .required("Duration is required")
      .max(8, "Duartion must be less than 8 character"),
    platform: Yup.string().required("Platform is required"),
    certificateURL: Yup.string().url("Invalid URL").url("Invalid URL format"),
    skills: Yup.string().required("Skill is required").min(3, "Add at least one skill."),
    internshiptitle: Yup.string()
      .required("Internship title is required")
      .min(2, "Title must be at least 2 characters"),
    company: Yup.string().required("Company Name is required").min(2,"company name must contain 2 character."),
    startDate: Yup.date().required("Please enter start date").max(Yup.ref('endDate'), "Start date must be before end date").max(new Date(),"Date must be in past"),
    endDate: Yup.date().required("Please enter end date").min(Yup.ref('startDate'), "End date must be after start date").max(new Date(),"Date must be in past"),
    responsibilities: Yup.string().required(
      "Roles/Responsibilities is required"
    ),
    achievements: Yup.string().required("Achievement is required").min(2 , "Achievements must contain 2 characters."),
    supervisor: Yup.string().required("Supervisor name is required").min(2,"Supervisor name should be at least 2 character."),
    feedback: Yup.string().required("Feedback is required").min(5, "feedback must contain 5 character.").max(20, "Feedback must be less than 20 character."),
    certificate: Yup.mixed().required("Certificate is required"),
    examName: Yup.string().required("Exam Name is required").min(2,"Exam Name must contain 2 character."),
    examDate: Yup.date().required("Exam Date is required").max(new Date(),"Date must be in past."),
    score: Yup.string().required("Score is required") .matches(/^\d+$/, "Score only numbers are allowed"),
    rank: Yup.string().required("Rank is required") .matches(/^\d+$/, "Rank only numbers are allowed"),
    percentile: Yup.string()
      .required("Percentile is required") .matches(/^\d+$/, "Percentage only numbers are allowed")
      .min(0, "Percentage cannot be less than 0")
      .max(100, "Percentage cannot be greater than 100"),
  });

  const handleSubmit = async (values) => {

   
      console.log("Values Data",values);

       // Convert values object to FormData
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });
    
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleBlur, handleChange }) => (
          <Form>

            <fieldset className="fieldset">
              <legend><u>Achievement/Certification Detail</u></legend>
              <div>
                <label>Achievement/Certification Title:</label>
                <input
                  type="text"
                  name="title"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.title && touched.title ? (
                  <p className="text-danger">{errors.title}</p>
                ) : null}
              </div>
              <div>
                <label>Achievement Description:</label>
                <textarea
                  name="description"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.description && touched.description ? (
                  <p className="text-danger">{errors.description}</p>
                ) : null}
              </div>
              <div>
                <label>Type of Achievement/Certification:</label>
                <input
                  type="text"
                  name="type"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.type && touched.type ? (
                  <p className="text-danger">{errors.type}</p>
                ) : null}
              </div>
              <div>
                <label>Provider/Organizer:</label>
                <input
                  type="text"
                  name="provider"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.provider && touched.provider ? (
                  <p className="text-danger">{errors.provider}</p>
                ) : null}
              </div>
              <div>
                <label>Date of Achievement:</label>
                <input
                  type="date"
                  name="date"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.date && touched.date ? (
                  <p className="text-danger">{errors.date}</p>
                ) : null}
              </div>
              <div>
                <label>Duration (for courses):</label>
                <input
                  type="text"
                  name="duration"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.duration && touched.duration ? (
                  <p className="text-danger">{errors.duration}</p>
                ) : null}
              </div>
              <div>
                <label>Platform/Website:</label>
                <input
                  type="text"
                  name="platform"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.platform && touched.platform ? (
                  <p className="text-danger">{errors.platform}</p>
                ) : null}
              </div>
              <div>
                <label>Certificate URL:</label>
                <input
                  type="url"
                  name="certificateURL"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.certificateURL && touched.certificateURL ? (
                  <p className="text-danger">{errors.certificateURL}</p>
                ) : null}
              </div>
              <div>
                <label>Skills/Knowledge Gained:</label>
                <textarea
                  name="skills"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.skills && touched.skills ? (
                  <p className="text-danger">{errors.skills}</p>
                ) : null}
              </div>
            </fieldset>

            <br />
            <fieldset className="fieldset">
              <legend><u>Intership Details</u></legend>
              <div>
                <label>Internship Title:</label>
                <input
                  type="text"
                  name="internshiptitle"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.internshiptitle && touched.internshiptitle ? (
                  <p className="text-danger">{errors.internshiptitle}</p>
                ) : null}
              </div>
              <div>
                <label>Company/Organization:</label>
                <input
                  type="text"
                  name="company"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.company && touched.company ? (
                  <p className="text-danger">{errors.company}</p>
                ) : null}
              </div>
              <div>
                <label>Internship Duration:</label>
                <div>
                  <label>Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.startDate && touched.startDate ? (
                    <p className="text-danger">{errors.startDate}</p>
                  ) : null}
                </div>
                <div>
                  <label>End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.endDate && touched.endDate ? (
                    <p className="text-danger">{errors.endDate}</p>
                  ) : null}
                </div>
              </div>
              <div>
                <label>Role/Responsibilities:</label>
                <textarea
                  name="responsibilities"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.responsibilities && touched.responsibilities ? (
                  <p className="text-danger">{errors.responsibilities}</p>
                ) : null}
              </div>
              <div>
                <label>Achievements:</label>
                <textarea
                  name="achievements"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.achievements && touched.achievements ? (
                  <p className="text-danger">{errors.achievements}</p>
                ) : null}
              </div>
              <div>
                <label>Supervisor/Mentor:</label>
                <input
                  type="text"
                  name="supervisor"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.supervisor && touched.supervisor ? (
                  <p className="text-danger">{errors.supervisor}</p>
                ) : null}
              </div>
              <div>
                <label>Feedback or Evaluation:</label>
                <textarea
                  name="feedback"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.feedback && touched.title ? (
                  <p className="text-danger">{errors.title}</p>
                ) : null}
              </div>
              <div>
                <label>Certificate (required):</label>
                <input
                  type="file"
                  name="certificate"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.certificate && touched.certificate ? (
                  <p className="text-danger">{errors.certificate}</p>
                ) : null}
              </div>
            </fieldset>{" "}
            <br />
            <fieldset className="fieldset">
              <legend><u>Entrance Exam Details</u></legend>
              <div>
                <label>Exam Name:</label>
                <input
                  type="text"
                  name="examName"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.examName && touched.examName ? (
                  <p className="text-danger">{errors.examName}</p>
                ) : null}
              </div>
              <div>
                <label>Exam Date:</label>
                <input
                  type="date"
                  name="examDate"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.examDate && touched.examDate ? (
                  <p className="text-danger">{errors.examDate}</p>
                ) : null}
              </div>
              <div>
                <label>Score:</label>
                <input
                  type="text"
                  name="score"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.score && touched.score ? (
                  <p className="text-danger">{errors.score}</p>
                ) : null}
              </div>
              <div>
                <label>Rank (required):</label>
                <input
                  type="text"
                  name="rank"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.rank && touched.rank ? (
                  <p className="text-danger">{errors.rank}</p>
                ) : null}
              </div>
              <div>
                <label>Percentile (required):</label>
                <input
                  type="text"
                  name="percentile"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.percentile && touched.percentile ? (
                  <p className="text-danger">{errors.percentile}</p>
                ) : null}
              </div>
            </fieldset>
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AchievementForm;
