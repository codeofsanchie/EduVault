import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { useLocation ,useNavigate } from "react-router-dom";
import { TempStorage } from "../TempStorage";
import axios from "axios";
import "../styles/viewstyles.css";


const ViewProfile = () => {
  const navigate = useNavigate();
  const handleEditClick = (sectionName) => {
    // Determine the page to navigate to based on the sectionName
    let nextPage;
    switch (sectionName) {
      case 'personalDetails':
        nextPage = '/add-PersonalDetails';
        break;
      case 'educationDetails':
        nextPage = '/add-EducationalDetails';
        break;
      case 'curricularDetails':
        nextPage = '/add-CurricularDetails';
        break;
      case 'achievementAndCertificationDetails':
        nextPage = '/add-AchievementDetails';
        break;
      case 'projectDetails':
        nextPage = '/add-ProjectDetails';
        break;
      default:
        nextPage = '/'; // Default to home page if no match found
    }
  
    // Navigate to the determined page
    navigate(nextPage);
  };
  
  const location = useLocation();
  const {
    personalDetails,
    currentCourseData,
    pastQualificationData,
    achievementData,
    internshipData,
    examData,
    clubData,
    eventData,
    communityServiceData,
    workshopData,
    projectData,
  } = useContext(TempStorage);

  const combinedData = location.state?.combinedData || null;

  // Ensure Data are arrays
  const personalDetailsData =
    personalDetails || location.state?.personalDetails || {};
  const currentCourse =
    currentCourseData || location.state?.currentCourseData || {};
  const pastQualification = Array.isArray(pastQualificationData)
    ? pastQualificationData
    : [];
  const clubs = Array.isArray(clubData) ? clubData : [];
  const events = Array.isArray(eventData) ? eventData : [];
  const communityServices = Array.isArray(communityServiceData)
    ? communityServiceData
    : [];
  const workshops = Array.isArray(workshopData) ? workshopData : [];
  const achievements = Array.isArray(achievementData) ? achievementData : [];
  const internships = Array.isArray(internshipData) ? internshipData : [];
  const exams = Array.isArray(examData) ? examData : [];
  const projects = Array.isArray(projectData) ? projectData : [];

  const handleSubmit = async () => {
    console.log("Student Data: ", combinedData);
    try {
      const response = await axios.post(
        "http://localhost:3001/proffile/save-proffile",
        combinedData
      );

      if (response.status === 200) {
        console.log(response.data);
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };


  const renderPersonalDetails = () => {

    return (
      <div className="personal-details-container">
        <div className="stud-fix-data">
          <img
            src="https://i.pinimg.com/736x/7d/07/74/7d0774c44f6768a8e5696edff37731e9.jpg"
            alt=""
            height="150"
            width="150"
            className="profile-img"
          />
          <div>
            <div className="stud-name">
              <p>{personalDetailsData.studentName}</p>
            </div>
            <div className="stud-details">
              <p className="email">
                <span>Email Id:</span> {personalDetailsData.email1}
              </p>{" "}
              <span style={{ marginRight: "80px" }}></span> |{" "}
              <span style={{ marginLeft: "80px" }}></span>
              <p>
                <span>Phone Number:</span> {personalDetailsData.phoneNo}
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="card">
          <div className="card-body">
            <div className="card-title  d-flex justify-content-between align-items-center">
              <h2 >About Me</h2>
              <button onClick={() => handleEditClick('personalDetails')} className="edit-button">
  Edit
</button>
            </div>
            <div className="details">
              <p>
                <span>Date of Birth:</span>
                <br />
                <p>{personalDetailsData.dob}</p>
              </p>
              <p>
                <span>Gender:</span>
                <br />
                <p>{personalDetailsData.gender}</p>
              </p>
              <p>
                <span>Blood Group:</span>
                <br />
                <p>{personalDetailsData.bloodGroup}</p>
              </p>
              <p>
                <span>Official Email:</span>
                <br />
                <p>{personalDetailsData.email2}</p>
              </p>
              <p>
                <span>Permanent Address:</span>
                <br />
                <p>{personalDetailsData.tempAddress}</p>
              </p>
              <p>
                <span>Correspondence Address:</span>
                <br />
                <p>{personalDetailsData.permAddress}</p>
              </p>
              <p>
                <span>State:</span>
                <br />
                <p>{personalDetailsData.state}</p>
              </p>
              <p>
                <span>District:</span>
                <br />
                <p>{personalDetailsData.district}</p>
              </p>
              <p>
                <span>Pincode:</span>
                <br />
                <p>{personalDetailsData.pincode}</p>
              </p>
              <p>
                <span>Nationality:</span>
                <br />
                <p>{personalDetailsData.nationality}</p>
              </p>
              <p>
                <span>Religion:</span>
                <br />
                <p>{personalDetailsData.religion}</p>
              </p>

              <h2>Family Details</h2>
              <p>
                <span>Father's Name:</span>
                <br />
                <p>{personalDetailsData.fatherName}</p>
              </p>
              <p>
                <span>Father Phone:</span>
                <br />
                <p>{personalDetailsData.fatherPhone}</p>
              </p>
              <p>
                <span>Father Email:</span>
                <br />
                <p>{personalDetailsData.fatherEmail}</p>
              </p>
              <p>
                <span>Father Occupation:</span>
                <br />
                <p>{personalDetailsData.fatherOccupation}</p>
              </p>
              <p>
                <span>Mother Name:</span>
                <br />
                <p>{personalDetailsData.motherName}</p>
              </p>
              <p>
                <span>Mother Phone:</span>
                <br />
                <p>{personalDetailsData.motherPhone}</p>
              </p>
              <p>
                <span>Mother Email:</span>
                <br />
                <p>{personalDetailsData.motherEmail}</p>
              </p>
              <p>
                <span>Mother Occupation:</span>
                <br />
                <p>{personalDetailsData.motherOccupation}</p>
              </p>
              <p>
                <span>Sibling Name:</span>
                <br />
                <p>{personalDetailsData.siblingName}</p>
              </p>
              <p>
                <span>Sibling Phone:</span>
                <br />
                <p>{personalDetailsData.siblingPhone}</p>
              </p>
              <p>
                <span>Sibling Email:</span>
                <br />
                <p>{personalDetailsData.siblingEmail}</p>
              </p>
              <p>
                <span>Sibling Occupation:</span>
                <br />
                <p>{personalDetailsData.siblingOccupation}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEducationDetails = () => {
    
    return (
      <div className="education-details-container">
        <div className="card">
          <div className="card-body">
            <div className="card-title  d-flex justify-content-between align-items-center">
              {" "}
              <h2>Educational Details</h2>
              <button onClick={() => handleEditClick('educationDetails')} className="edit-button">
  Edit
</button>
            </div>
            <div className="edu-details">
              <div>
                <h2>Current Course Details</h2>
                <div>
                  <p>
                    <span>Admission Year:</span>
                    <br />
                    <p>{currentCourse.admissionYear}</p>
                  </p>
                  <p>
                    <span>Institute State:</span>
                    <br />
                    <p>{currentCourse.instituteState}</p>
                  </p>
                  <p>
                    <span>Institute District:</span>
                    <br />
                    <p>{currentCourse.instituteDistrict}</p>
                  </p>
                  <p>
                    <span>Institute Taluka: </span>
                    <br />
                    <p>{currentCourse.instituteTaluka}</p>
                  </p>
                  <p>
                    <span>Qualification Level: </span> <br />
                    <p>{currentCourse.qualificationLevel}</p>
                  </p>
                  <p>
                    <span>Stream: </span> <br />
                    <p>{currentCourse.stream}</p>
                  </p>
                  <p>
                    <span>College Name / School Name:</span>
                    <br />
                    <p> {currentCourse.collegeName}</p>
                  </p>
                  <p>
                    <span>Course Name: </span> <br />
                    <p> {currentCourse.courseName}</p>
                  </p>
                  <p>
                    <span>CET / Merit Percentage / CLAT Score:</span>
                    <br />
                    <p>{currentCourse.cetMeritPercentageClatScore}</p>
                  </p>
                  <p>
                    <span>
                      Application Admission ID/CAP ID/CLAT Admit Card No:
                    </span>
                    <br />
                    <p>{currentCourse.applicationId}</p>
                  </p>
                  <p>
                    <span>Year Of Study: </span> <br />
                    <p>{currentCourse.yearOfStudy}</p>
                  </p>
                  <p>
                    <span>Completed Or Pursuing: </span> <br />
                    <p>{currentCourse.completedOrContinue}</p>
                  </p>
                  <p>
                    <span>Gap Years: </span>
                    <br />
                    <p>{currentCourse.gapYears}</p>
                  </p>
                  <p>
                    <span>Mode (Regular/Distance):</span>
                    <br />
                    <p>{currentCourse.mode}</p>
                  </p>
                  <p>
                    <span>Results (Sem wise with Image):</span>
                    <br />
                    <p>{currentCourse.result}</p>
                  </p>
                </div>
              </div>
              <div>
                <h2>Past Qualification Details</h2>
                {pastQualification.map((qualification, index) => (
                  <div key={index}>
                    <h3>Qualification {index + 1}</h3>
                    <div>
                      <p>
                        <span>Qualification Level:</span>
                        <br />
                        <p>{qualification.qualificationLevel}</p>
                      </p>
                      <p>
                        <span>Stream:</span>
                        <br />
                        <p>{qualification.stream}</p>
                      </p>
                      <p>
                        <span>Institute State:</span>
                        <br />
                        <p>{qualification.instituteState}</p>
                      </p>
                      <p>
                        <span>Institute District:</span>
                        <br />
                        <p>{qualification.instituteDistrict}</p>
                      </p>
                      <p>
                        <span>Institute Taluka:</span>
                        <br />
                        <p>{qualification.instituteTaluka}</p>
                      </p>
                      <p>
                        <span>College Name / School Name:</span>
                        <br />
                        <p>{qualification.collegeName}</p>
                      </p>
                      <p>
                        <span>Course:</span>
                        <br />
                        <p>{qualification.course}</p>
                      </p>
                      <p>
                        <span>Board/University:</span>
                        <br />
                        <p>{qualification.boardUniversity}</p>
                      </p>
                      <p>
                        <span>Mode (Regular/Distance):</span>
                        <br />
                        <p>{qualification.mode}</p>
                      </p>
                      <p>
                        <span>Admission Year:</span>
                        <br />
                        <p>{qualification.admissionYear}</p>
                      </p>
                      <p>
                        <span>Passing Year:</span>
                        <br />
                        <p>{qualification.passingYear}</p>
                      </p>
                      <p>
                        <span>Result:</span>
                        <br />
                        <p>{qualification.result}</p>
                      </p>
                      <p>
                        <span>Percentage:</span>
                        <br />
                        <p>{qualification.percentage}</p>
                      </p>
                      <p>
                        <span>Attempts:</span>
                        <br />
                        <p>{qualification.attempts}</p>
                      </p>
                      <p>
                        <span>Upload Marksheet:</span>
                        <br />
                        <p>{qualification.marksheet}</p>
                      </p>
                      <p>
                        <span>Was any Gap in this Qualification/Course?:</span>
                        <br />
                        <p>{qualification.gap}</p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurricularDetails = () => {
 

    return (
      <div className="curricular-details-container">
         <div className="card">
          <div className="card-body">
            <div className="card-title  d-flex justify-content-between align-items-center">
              {" "}
              <h2>
          Curricular & Co-curricular Details
        </h2>
        <button onClick={() => handleEditClick('curricularDetails')} className="edit-button">
  Edit
</button>
            </div>
            <div className="curricular-details">
            <div className="club-details-container">
          <h2>Club/Committee Details</h2>
          {clubs.map((club, index) => (
            <div key={index}>
              <h3>Field {index + 1}</h3>
              <p>
                <span>Club/Committee Name:</span>
                <br />
                <p>{club.clubName}</p>
              </p>
              <p>
                <span>Position Held:</span>
                <br />
                <p>{club.positionHeld}</p>
              </p>
              <p>
                <span>Activities/Contributions:</span>
                <br />
                <p>{club.activities}</p>
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2>Event Details</h2>
          {events.map((event, index) => (
            <div key={index}>
              <h3>Field {index + 1}</h3>
              <p>
                <span>Event Name:</span>
                <br />
                <p>{event.eventName}</p>
              </p>
              <p>
                <span>Event Type:</span>
                <br />
                <p>{event.eventType}</p>
              </p>
              <p>
                <span>Other Event Type:</span>
                <br />
                <p>{event.otherEventType}</p>
              </p>
              <p>
                <span>Participation Level:</span>
                <br />
                <p>
                  {event.participationLevel}
                </p>
              </p>
              <p>
                <span>Achievement:</span>
                <br />
                <p>{event.achievement}</p>
              </p>
              <p>
                <span>Year Participated:</span>
                <br />
                <p>{event.yearParticipated}</p>
              </p>
              <p>
                <span>Certificate:</span>
                <br />
                <p>{event.certificate}</p>
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2>Community Service Details</h2>
          {communityServices.map((service, index) => (
            <div key={index}>
              <h3>Field {index + 1}</h3>
              <p>
                <span>Activity Name:</span>
                <br />
                <p>{service.activityName}</p>
              </p>
              <p>
                <span>Organization:</span>
                <br />
                <p>{service.organization}</p>
              </p>
              <p>
                <span>Description:</span>
                <br />
                <p>{service.description}</p>
              </p>
              <p>
                <span>Duration:</span>
                <br />
                <p>
                  {service.duration.from} to {service.duration.to}
                </p>
              </p>
              <p>
                <span>Impact:</span>
                <br />
                <p>{service.impact}</p>
              </p>
              <p>
                <span>Documentation:</span>
                <br />
                <p>{service.documentation}</p>
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2>Workshop Details</h2>
          {workshops.map((workshop, index) => (
            <div key={index}>
              <h3>Field {index + 1}</h3>
              <p>
                <span>Title:</span>
                <br />
                <p>{workshop.title}</p>
              </p>
              <p>
                <span>Organizer:</span>
                <br />
                <p>{workshop.organizer}</p>
              </p>
              <p>
                <span>Description:</span>
                <br />
                <p>{workshop.description}</p>
              </p>
              <p>
                <span>Dates:</span>
                <br />
                <p>
                  {workshop.dates.from} to {workshop.dates.to}
                </p>
              </p>
              <p>
                <span>Skills:</span>
                <br />
                <p>{workshop.skills}</p>
              </p>
              <p>
                <span>Documentation:</span>
                <br />
                <p>{workshop.documentation}</p>
              </p>
            </div>
          ))}
        </div>

            </div>

      </div>
            </div>
            </div>

    );
  };

  const renderAchievementAndCertificationDetails = () => {
  
    return (
      <div className="achievementcertification-details-container">
        <div className="card">
          <div className="card-body">
            <div className="card-title  d-flex justify-content-between align-items-center">
              {" "}
              <h2>
          Achievements & Certification Details
        </h2>
        <button onClick={() => handleEditClick('achievementAndCertificationDetails')} className="edit-button">
  Edit
</button>
            </div> 
            <div className="certification-details">

       
            <div className="achievement-details-container">
          <h2>Achievement Details</h2>
          {achievements.map((achievement, index) => (
            <div key={index}>
              <h3>Achievement {index + 1}</h3>
              <p>
                <span>Title:</span>
                <br />
                <p>{achievement.title}</p>
              </p>
              <p>
                <span>Description:</span>
                <br />
                <p>{achievement.description}</p>
              </p>
              <p>
                <span>Achievement type:</span>
                <br />
                <p>{achievement.type}</p>
              </p>
              <p>
                <span>Provider/Organization:</span>
                <br />
                <p>{achievement.provider}</p>
              </p>
              <p>
                <span>Achievement date:</span>
                <br />
                <p>{achievement.date}</p>
              </p>
              <p>
                <span>Duration:</span>
                <br />
                <p>{achievement.duration}</p>
              </p>
              <p>
                <span>Platform:</span>
                <br />
                <p>{achievement.platform}</p>
              </p>
              <p>
                <span>Certificate URL:</span>
                <br />
                <p>
                  {achievement.certificateURL}
                </p>
              </p>
              <p>
                <span>Skills:</span>
                <br />
                <p>{achievement.skills}</p>
              </p>
            </div>
          ))}
        </div>

        <div className="internship-details-container">
          <h2>Internship Details</h2>
          {internships.map((internship, index) => (
            <div key={index}>
              <h3>Internship {index + 1}</h3>
              <p>
                <span>Title:</span>
                <br />
                <p>
                  {internship.internshiptitle}
                </p>
              </p>
              <p>
                <span>Company:</span>
                <br />
                <p>{internship.company}</p>
              </p>
              <p>
                <span>Start date:</span>
                <br />
                <p>{internship.startDate}</p>
              </p>
              <p>
                <span>End date:</span>
                <br />
                <p>{internship.endDate}</p>
              </p>
              <p>
                <span>Responsibilities:</span>
                <br />
                <p>
                  {internship.responsibilities}
                </p>
              </p>
              <p>
                <span>Achievements:</span>
                <br />
                <p>{internship.achievements}</p>
              </p>
              <p>
                <span>Supervisor:</span>
                <br />
                <p>{internship.supervisor}</p>
              </p>
              <p>
                <span>Feedback:</span>
                <br />
                <p>{internship.feedback}</p>
              </p>
              <p>
                <span>Certificate:</span>
                <br />
                <p>{internship.certificate}</p>
              </p>
            </div>
          ))}
        </div>

        <div className="exam-details-container">
          <h2>Exam Details</h2>
          {exams.map((exam, index) => (
            <div key={index}>
              <h3>Exam {index + 1}</h3>
              <p>
                <span>Name:</span>
                <br />
                <p>{exam.examName}</p>
              </p>
              <p>
                <span>Date:</span>
                <br />
                <p>{exam.examDate}</p>
              </p>
              <p>
                <span>Score:</span>
                <br />
                <p>{exam.score}</p>
              </p>
              <p>
                <span>Rank:</span>
                <br />
                <p>{exam.rank}</p>
              </p>
              <p>
                <span>Percentile:</span>
                <br />
                <p>{exam.percentile}</p>
              </p>
            </div>
          ))}
        </div>
            </div>
            </div>
            </div>

      </div>
    );
  };

  const renderProjectDetails = () => {
  
    return (
      <div className="project-details-container">

<div className="card">
          <div className="card-body">
            <div className="card-title  d-flex justify-content-between align-items-center">
              {" "}
              <h2>Project Details</h2>
              <button onClick={() => handleEditClick('projectDetails')} className="edit-button">
  Edit
</button>
            </div> 
            <div className="project-details">

            {projects.map((project, index) => (
          <div key={index}>
            <h3>Project {index + 1}</h3>
            <p>
              <span>Project Title:</span>
              <br />
              <p>{project.projectTitle}</p>
            </p>
            <p>
              <span>Project Description:</span>
              <br />
              <p>
                {project.projectDescription}
              </p>
            </p>
            <p>
              <span>Project Category:</span>
              <br />
              <p>{project.projectCategory}</p>
            </p>
            <p>
              <span>GitHub Repository URL:</span>
              <br />
              <p>{project.githubRepoURL}</p>
            </p>
            <p>
              <span>Technologies Used:</span>
              <br />
              <p>{project.technologiesUsed}</p>
            </p>
            <p>
              <span>Start Date:</span>
              <br />
              <p>{project.startDate}</p>
            </p>
            <p>
              <span>End Date:</span>
              <br />
              <p>{project.endDate}</p>
            </p>
            <p>
              <span>Project Team:</span>
              <br />
              <p>{project.teamMembers}</p>
            </p>
            <p>
              <span>
                Project Goals and Objectives:
              </span>
              <br />
              <p>{project.projectGoals}</p>
            </p>
            <p>
              <span>Challenges Faced:</span>
              <br />
              <p>{project.challengesFaced}</p>
            </p>
            <p>
              <span>License:</span>
              <br />
              <p>{project.license}</p>
            </p>
            <p>
              <span>References or Citations:</span>
              <br />
              <p>{project.references}</p>
            </p>
          </div>
        ))}
            </div>
            
            </div></div>
      
      </div>
    );
  };

  return (
    <div className="form-container">
      <h2 className=" text-xl-center fw-bold">Profile Details</h2>
      {renderPersonalDetails()}
      {renderEducationDetails()}
      {renderCurricularDetails()}
      {renderAchievementAndCertificationDetails()}
      {renderProjectDetails()}
      <br />
      <label>
        <input type="checkbox" required />
        All information is correct
      </label>{" "}
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ViewProfile;
