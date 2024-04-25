import React, { useContext } from "react";
import { Formik, Form } from 'formik';
import { useLocation } from "react-router-dom";
import { TempStorage } from "../TempStorage";
import axios from 'axios';
import "../styles/viewstyles.css";

const ViewProfile = () => {
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
            const response = await axios.post('http://localhost:3001/proffile/save-proffile', combinedData);

            if (response.status === 200) {
                console.log(response.data);
            } else {
                throw new Error('Failed to save data');
            }
        } catch (error) {
            console.error("Form submission failed", error);
        }
    };

    if (
        !personalDetailsData &&
        !currentCourse &&
        !pastQualification.length &&
        !achievements.length &&
        !internships.length &&
        !exams.length &&
        !clubs.length &&
        !events.length &&
        !communityServices.length &&
        !workshops.length &&
        !projects.length
    ) {
        return <div>No data submitted yet</div>;
    }

    const renderPersonalDetails = () => {
        const hasAnyField = Object.values(personalDetailsData).some(
            (field) => field
        );
        if (!hasAnyField) {
            return <div>No Personal data submitted yet</div>;
        }
        return (
            <div className="personal-details-container">
                <h2 className="fw-bold text-center">Personal Details</h2>
                <div className=" d-flex align-content-center justify-content-center">  
                    <img src="https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg" alt="" height="200" width="200"/>                        
                 <br />
                    </div> <br /><br />
                    <p>
    <span className="fw-bold me-2">Name:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.studentName}</p>
</p>
<p>
    <span className="fw-bold me-2">Date of Birth:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.dob}</p>
</p>
               
<p>
    <span className="fw-bold me-2">Gender:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.gender}</p>
</p>
<p>
    <span className="fw-bold me-2">Phone Number:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.phoneNo}</p>
</p>
<p>
    <span className="fw-bold me-2">Blood Group:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.bloodGroup}</p>
</p>
<p>
    <span className="fw-bold me-2">Personal Email:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.email1}</p>
</p>
<p>
    <span className="fw-bold me-2">Official Email:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.email2}</p>
</p>
<p>
    <span className="fw-bold me-2">Permanent Address:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.tempAddress}</p>
</p>
{/* Uncomment the line below if needed */}
{/* <p><span className="fw-bold me-2">Is Correspondence Address Same as Permanent Address:</span> {personalDetailsData.sameAsTempAddress ? 'Yes' : 'No'}</p> */}
<p>
    <span className="fw-bold me-2">Correspondence Address:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.permAddress}</p>
</p>
<p>
    <span className="fw-bold me-2">State:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.state}</p>
</p>
<p>
    <span className="fw-bold me-2">District:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.district}</p>
</p>
<p>
    <span className="fw-bold me-2">Pincode:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.pincode}</p>
</p>
<p>
    <span className="fw-bold me-2">Nationality:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.nationality}</p>
</p>
<p>
    <span className="fw-bold me-2">Religion:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.religion}</p>
</p>


                <h2>Family Details</h2>
                <p>
    <span className="fw-bold me-2">Father's Name:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.fatherName}</p>
</p>
<p>
    <span className="fw-bold me-2">Father Phone:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.fatherPhone}</p>
</p>
<p>
    <span className="fw-bold me-2">Father Email:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.fatherEmail}</p>
</p>
<p>
    <span className="fw-bold me-2">Father Occupation:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.fatherOccupation}</p>
</p>
<p>
    <span className="fw-bold me-2">Mother Name:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.motherName}</p>
</p>
<p>
    <span className="fw-bold me-2">Mother Phone:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.motherPhone}</p>
</p>
<p>
    <span className="fw-bold me-2">Mother Email:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.motherEmail}</p>
</p>
<p>
    <span className="fw-bold me-2">Mother Occupation:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.motherOccupation}</p>
</p>
<p>
    <span className="fw-bold me-2">Sibling Name:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.siblingName}</p>
</p>
<p>
    <span className="fw-bold me-2">Sibling Phone:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.siblingPhone}</p>
</p>
<p>
    <span className="fw-bold me-2">Sibling Email:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.siblingEmail}</p>
</p>
<p>
    <span className="fw-bold me-2">Sibling Occupation:</span><br />
    <p className="text-danger fw-bold">{personalDetailsData.siblingOccupation}</p>
</p>

            </div>
        );
    };

    const renderEducationDetails = () => {
        if (!currentCourse) {
            return <div>No Current Course data submitted yet</div>;
        }
        if (!pastQualification.length) {
            return <div>No Past Qualification data submitted yet</div>;
        }
        return (
            <div className="education-details-container">
                <h2 className=" fw-bold text-center">Educational Details</h2>
                <div>
          <h2>Current Course Details</h2>
          <p>
            <span className="fw-bold me-2">Admission Year:</span> <br />
            <p className=" text-danger fw-bold">
              {currentCourse.admissionYear}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">Institute State:</span>
            <br />{" "}
            <p className=" text-danger fw-bold">
              {" "}
              {currentCourse.instituteState}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">Institute District: </span>
            <br />
            <p className=" text-danger fw-bold">
              {currentCourse.instituteDistrict}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">Institute Taluka: </span>
            <br />
            <p className=" text-danger fw-bold">
              {" "}
              {currentCourse.instituteTaluka}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">Qualification Level: </span> <br />
            <p className=" text-danger fw-bold">
              {" "}
              {currentCourse.qualificationLevel}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">Stream: </span> <br />
            <p className=" text-danger fw-bold">{currentCourse.stream}</p>
          </p>
          <p>
            <span className="fw-bold me-2">College Name / School Name:</span>{" "}
            <br />
            <p className=" text-danger fw-bold"> {currentCourse.collegeName}</p>
          </p>
          <p>
            <span className="fw-bold me-2">Course Name: </span> <br />
            <p className=" text-danger fw-bold"> {currentCourse.courseName}</p>
          </p>
          <p>
            <span className="fw-bold me-2">
              {" "}
              CET / Merit Percentage / CLAT Score:{" "}
            </span>
            <br />
            <p className=" text-danger fw-bold">
              {" "}
              {currentCourse.cetMeritPercentageClatScore}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">
              {" "}
              Application Admission ID/CAP ID/CLAT Admit Card No:{" "}
            </span>
            <br />
            <p className=" text-danger fw-bold">
              {" "}
              {currentCourse.applicationId}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">Year Of Study: </span> <br />
            <p className=" text-danger fw-bold">{currentCourse.yearOfStudy}</p>
          </p>
          <p>
            <span className="fw-bold me-2">Completed Or Pursuing: </span> <br />
            <p className=" text-danger fw-bold">
              {currentCourse.completedOrContinue}
            </p>
          </p>
          <p>
            <span className="fw-bold me-2">Gap Years: </span>
            <br />
            <p className=" text-danger fw-bold">{currentCourse.gapYears}</p>
          </p>
          <p>
            <span className="fw-bold me-2">Mode (Regular/Distance):</span>{" "}
            <br />
            <p className=" text-danger fw-bold">{currentCourse.mode}</p>
          </p>
          <p>
            <span className="fw-bold me-2">
              Results (Sem wise with Image):{" "}
            </span>
            <br />
            <p className=" text-danger fw-bold">{currentCourse.result}</p>
          </p>
        </div>
                <div>
                    <h2>Past Qualification Details</h2>
                    {pastQualification.map((qualification, index) => (
                        <div key={index}>
                        <h3>Qualification {index + 1}</h3>
                        <p>
                          {" "}
                          <span className="fw-bold me-2">Qualification Level:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.qualificationLevel}
                          </p>
                        </p>
                        <p>
                          {" "}
                          <span className="fw-bold me-2">Stream:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">{qualification.stream}</p>
                        </p>
                        <p>
                          {" "}
                          <span className="fw-bold me-2">Institute State:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.instituteState}
                          </p>
                        </p>
                        <p>
                          {" "}
                          <span className="fw-bold me-2">Institute District:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.instituteDistrict}
                          </p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">Institute Taluka:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.instituteTaluka}
                          </p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">
                            College Name / School Name:
                          </span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.collegeName}
                          </p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">Course:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">{qualification.course}</p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">Board/University:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.boardUniversity}
                          </p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">Mode (Regular/Distance):</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">{qualification.mode}</p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">Admission Year:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.admissionYear}
                          </p>
                        </p>
                        <p>
                          {" "}
                          <span className="fw-bold me-2">Passing Year:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.passingYear}
                          </p>
                        </p>
                        <p>
                          {" "}
                          <span className="fw-bold me-2">Result:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">{qualification.result}</p>
                        </p>
                        <p>
                          {" "}
                          <span className="fw-bold me-2">Percentage:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">
                            {qualification.percentage}
                          </p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">Attempts:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">{qualification.attempts}</p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">Upload Marksheet:</span>
                          <br />{" "}
                          <p className="text-danger fw-bold">{qualification.marksheet}</p>
                        </p>
                        <p>
                          <span className="fw-bold me-2">
                            Was any Gap in this Qualification/Course?:
                          </span>
                          <br />{" "}
                          <p className="text-danger fw-bold">{qualification.gap}</p>
                        </p>
                      </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderCurricularDetails = () => {
        if (!clubs.length) {
          return <div>No Club/Committee data submitted yet</div>;
        }
        if (!events.length) {
          return <div>No Event data submitted yet</div>;
        }
        if (!communityServices.length) {
          return <div>No Community Service data submitted yet</div>;
        }
        if (!workshops.length) {
          return <div>No Workshop data submitted yet</div>;
        }
    
        return (
          <div className="curricular-details-container">
            <h2 className=" fw-bold text-center">Curricular & Co-curricular Details</h2>
            <div className="club-details-container">
              <h2>Club/Committee Details</h2>
              {clubs.map((club, index) => (
                <div key={index}>
                  <h3>Field {index + 1}</h3>
                  <p>
    <span className="fw-bold me-2">Club/Committee Name:</span><br />
    <p className="text-danger fw-bold">{club.clubName}</p>
</p>
<p>
    <span className="fw-bold me-2">Position Held:</span><br />
    <p className="text-danger fw-bold">{club.positionHeld}</p>
</p>
<p>
    <span className="fw-bold me-2">Activities/Contributions:</span><br />
    <p className="text-danger fw-bold">{club.activities}</p>
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
                    <span className="fw-bold me-2">Event Name:</span>
                    <br />
                    <p className="text-danger fw-bold">{event.eventName}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Event Type:</span>
                    <br />
                    <p className="text-danger fw-bold">{event.eventType}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Other Event Type:</span>
                    <br />
                    <p className="text-danger fw-bold">{event.otherEventType}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Participation Level:</span>
                    <br />
                    <p className="text-danger fw-bold">
                      {event.participationLevel}
                    </p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Achievement:</span>
                    <br />
                    <p className="text-danger fw-bold">{event.achievement}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Year Participated:</span>
                    <br />
                    <p className="text-danger fw-bold">{event.yearParticipated}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Certificate:</span>
                    <br />
                    <p className="text-danger fw-bold">{event.certificate}</p>
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
                    <span className="fw-bold me-2">Activity Name:</span>
                    <br />
                    <p className="text-danger fw-bold">{service.activityName}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Organization:</span>
                    <br />
                    <p className="text-danger fw-bold">{service.organization}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Description:</span>
                    <br />
                    <p className="text-danger fw-bold">{service.description}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Duration:</span>
                    <br />
                    <p className="text-danger fw-bold">
                      {service.duration.from} to {service.duration.to}
                    </p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Impact:</span>
                    <br />
                    <p className="text-danger fw-bold">{service.impact}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Documentation:</span>
                    <br />
                    <p className="text-danger fw-bold">{service.documentation}</p>
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
                    <span className="fw-bold me-2">Title:</span>
                    <br />
                    <p className="text-danger fw-bold">{workshop.title}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Organizer:</span>
                    <br />
                    <p className="text-danger fw-bold">{workshop.organizer}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Description:</span>
                    <br />
                    <p className="text-danger fw-bold">{workshop.description}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Dates:</span>
                    <br />
                    <p className="text-danger fw-bold">
                      {workshop.dates.from} to {workshop.dates.to}
                    </p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Skills:</span>
                    <br />
                    <p className="text-danger fw-bold">{workshop.skills}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Documentation:</span>
                    <br />
                    <p className="text-danger fw-bold">{workshop.documentation}</p>
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      };


    const renderAchievementAndCertificationDetails = () => {
        if (!achievements.length) {
          return <div>No Achievement data submitted yet</div>;
        }
        if (!internships.length) {
          return <div>No Internship data submitted yet</div>;
        }
        if (!exams.length) {
          return <div>No Exam data submitted yet</div>;
        }
    
        return (
          <div className="achievementcertification-details-container">
            <h2 className=" fw-bold text-center">Achievements & Certification Details</h2>
            <div className="achievement-details-container">
              <h2>Achievement Details</h2>
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <h3>
                    Achievement {index + 1}
                  </h3>
                  <p>
                    <span className="fw-bold me-2">Title:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.title}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Description:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.description}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Achievement type:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.type}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Provider/Organization:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.provider}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Achievement date:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.date}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Duration:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.duration}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Platform:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.platform}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Certificate URL:</span>
                    <br />
                    <p className="text-danger fw-bold">
                      {achievement.certificateURL}
                    </p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Skills:</span>
                    <br />
                    <p className="text-danger fw-bold">{achievement.skills}</p>
                  </p>
                </div>
              ))}
            </div>
    
            <div className="internship-details-container">
              <h2>Internship Details</h2>
              {internships.map((internship, index) => (
                <div key={index}>
                  <h3>
                    Internship {index + 1}
                  </h3>
                  <p>
                    <span className="fw-bold me-2">Title:</span>
                    <br />
                    <p className="text-danger fw-bold">
                      {internship.internshiptitle}
                    </p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Company:</span>
                    <br />
                    <p className="text-danger fw-bold">{internship.company}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Start date:</span>
                    <br />
                    <p className="text-danger fw-bold">{internship.startDate}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">End date:</span>
                    <br />
                    <p className="text-danger fw-bold">{internship.endDate}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Responsibilities:</span>
                    <br />
                    <p className="text-danger fw-bold">
                      {internship.responsibilities}
                    </p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Achievements:</span>
                    <br />
                    <p className="text-danger fw-bold">{internship.achievements}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Supervisor:</span>
                    <br />
                    <p className="text-danger fw-bold">{internship.supervisor}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Feedback:</span>
                    <br />
                    <p className="text-danger fw-bold">{internship.feedback}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Certificate:</span>
                    <br />
                    <p className="text-danger fw-bold">{internship.certificate}</p>
                  </p>
                </div>
              ))}
            </div>
    
            <div className="exam-details-container">
              <h2>Exam Details</h2>
              {exams.map((exam, index) => (
                <div key={index}>
                  <h3>
                    Exam {index + 1}
                  </h3>
                  <p>
                    <span className="fw-bold me-2">Name:</span>
                    <br />
                    <p className="text-danger fw-bold">{exam.examName}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Date:</span>
                    <br />
                    <p className="text-danger fw-bold">{exam.examDate}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Score:</span>
                    <br />
                    <p className="text-danger fw-bold">{exam.score}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Rank:</span>
                    <br />
                    <p className="text-danger fw-bold">{exam.rank}</p>
                  </p>
                  <p>
                    <span className="fw-bold me-2">Percentile:</span>
                    <br />
                    <p className="text-danger fw-bold">{exam.percentile}</p>
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      };

    const renderProjectDetails = () => {
        if (!projects.length) {
            return <div>No Project data submitted yet</div>;
        }
        return (
            <div className="project-details-container">
                <h2 className=" fw-bold text-center">Project Details</h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>Project {index + 1}</h3>
                        <p>
    <span className="fw-bold me-2">Project Title:</span><br />
    <p className="text-danger fw-bold">{project.projectTitle}</p>
</p>
<p>
    <span className="fw-bold me-2">Project Description:</span><br />
    <p className="text-danger fw-bold">{project.projectDescription}</p>
</p>
<p>
    <span className="fw-bold me-2">Project Category:</span><br />
    <p className="text-danger fw-bold">{project.projectCategory}</p>
</p>
<p>
    <span className="fw-bold me-2">GitHub Repository URL:</span><br />
    <p className="text-danger fw-bold">{project.githubRepoURL}</p>
</p>
<p>
    <span className="fw-bold me-2">Technologies Used:</span><br />
    <p className="text-danger fw-bold">{project.technologiesUsed}</p>
</p>
<p>
    <span className="fw-bold me-2">Start Date:</span><br />
    <p className="text-danger fw-bold">{project.startDate}</p>
</p>
<p>
    <span className="fw-bold me-2">End Date:</span><br />
    <p className="text-danger fw-bold">{project.endDate}</p>
</p>
<p>
    <span className="fw-bold me-2">Project Team:</span><br />
    <p className="text-danger fw-bold">{project.teamMembers}</p>
</p>
<p>
    <span className="fw-bold me-2">Project Goals and Objectives:</span><br />
    <p className="text-danger fw-bold">{project.projectGoals}</p>
</p>
<p>
    <span className="fw-bold me-2">Challenges Faced:</span><br />
    <p className="text-danger fw-bold">{project.challengesFaced}</p>
</p>
<p>
    <span className="fw-bold me-2">License:</span><br />
    <p className="text-danger fw-bold">{project.license}</p>
</p>
<p>
    <span className="fw-bold me-2">References or Citations:</span><br />
    <p className="text-danger fw-bold">{project.references}</p>
</p>

                    </div>
                ))}
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
  </label> <br /><br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ViewProfile;
