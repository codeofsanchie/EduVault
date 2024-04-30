import React, { useState, useContext } from "react";
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
        resetContextData,
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
    const communityService = Array.isArray(communityServiceData)
        ? communityServiceData
        : [];
    const workshops = Array.isArray(workshopData) ? workshopData : [];
    const achievements = Array.isArray(achievementData) ? achievementData : [];
    const internships = Array.isArray(internshipData) ? internshipData : [];
    const exams = Array.isArray(examData) ? examData : [];
    const projects = Array.isArray(projectData) ? projectData : [];

    const handleSubmit = async (values, { resetForm }) => {
        console.log("Student Data: ", combinedData);
        try {
            const response = await axios.post('http://localhost:3001/proffile/save-proffile', combinedData);

            if (response.status === 200) {
                console.log(response.data);
                resetForm(); // Reset the form
                resetContextData(); 
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
        !communityService.length &&
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
                <h2>Personal Details</h2>
                <img src={personalDetailsData.photo} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '200px', marginLeft: '10px' }} />
                <p>Name: {personalDetailsData.studentName}</p>
                <p>Date of Birth: {personalDetailsData.dob}</p>
                <p>Gender: {personalDetailsData.gender}</p>
                <p>Phone Number: {personalDetailsData.phoneNo}</p>
                <p>Blood Group: {personalDetailsData.bloodGroup}</p>
                <p>Personal Email: {personalDetailsData.email1}</p>
                <p>Official Email: {personalDetailsData.email2}</p>
                <p>Permanent Address: {personalDetailsData.tempAddress}</p>
                {/* Uncomment the line below if needed */}
                {/* <p>Is Correspondence Address Same as Permanent Address: {personalDetailsData.sameAsTempAddress ? 'Yes' : 'No'}</p> */}
                <p>Correspondence Address: {personalDetailsData.permAddress}</p>
                <p>State: {personalDetailsData.state}</p>
                <p>District: {personalDetailsData.district}</p>
                <p>Pincode: {personalDetailsData.pincode}</p>
                <p>Nationality: {personalDetailsData.nationality}</p>
                <p>Religion: {personalDetailsData.religion}</p>
                {/* Add more fields as needed */}

                <h2>Family Details</h2>
                <p>Father's Name: {personalDetailsData.fatherName}</p>
                <p>Father Phone: {personalDetailsData.fatherPhone}</p>
                <p>Father Email: {personalDetailsData.fatherEmail}</p>
                <p>Father Occupation: {personalDetailsData.fatherOccupation}</p>
                <p>Mother Name: {personalDetailsData.motherName}</p>
                <p>Mother Phone: {personalDetailsData.motherPhone}</p>
                <p>Mother Email: {personalDetailsData.motherEmail}</p>
                <p>Mother Occupation: {personalDetailsData.motherOccupation}</p>
                <p>Sibling Name: {personalDetailsData.siblingName}</p>
                <p>Sibling Phone: {personalDetailsData.siblingPhone}</p>
                <p>Sibling Email: {personalDetailsData.siblingEmail}</p>
                <p>Sibling Occupation: {personalDetailsData.siblingOccupation}</p>
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
                <div>
                    <h2>Current Course Details</h2>
                    <p>Admission Year: {currentCourse.admissionYear}</p>
                    <p>Institute State: {currentCourse.instituteState}</p>
                    <p>Institute District: {currentCourse.instituteDistrict}</p>
                    <p>Institute Taluka: {currentCourse.instituteTaluka}</p>
                    <p>Qualification Level: {currentCourse.qualificationLevel}</p>
                    <p>Stream: {currentCourse.stream}</p>
                    <p>College Name / School Name: {currentCourse.collegeName}</p>
                    <p>Course Name: {currentCourse.courseName}</p>
                    <p>
                        CET / Merit Percentage / CLAT Score:{" "}
                        {currentCourse.cetMeritPercentageClatScore}
                    </p>
                    <p>
                        Application Admission ID/CAP ID/CLAT Admit Card No:{" "}
                        {currentCourse.applicationId}
                    </p>
                    <p>Year Of Study: {currentCourse.yearOfStudy}</p>
                    <p>Completed Or Pursuing: {currentCourse.completedOrContinue}</p>
                    <p>Gap Years: {currentCourse.gapYears}</p>
                    <p>Mode (Regular/Distance): {currentCourse.mode}</p>
                    <img src={currentCourse.photo} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '200px', marginLeft: '10px' }} />
                    {/* Add more fields as needed */}
                </div>
                <div>
                    <h2>Past Qualification Details</h2>
                    {pastQualification.map((qualification, index) => (
                        <div key={index}>
                            <h2>Qualification {index + 1}</h2>
                            <p>Qualification Level: {qualification.qualificationLevel}</p>
                            <p>Stream: {qualification.stream}</p>
                            <p>Institute State: {qualification.instituteState}</p>
                            <p>Institute District: {qualification.instituteDistrict}</p>
                            <p>Institute Taluka: {qualification.instituteTaluka}</p>
                            <p>College Name / School Name: {qualification.collegeName}</p>
                            <p>Course: {qualification.course}</p>
                            <p>Board/University: {qualification.boardUniversity}</p>
                            <p>Mode (Regular/Distance): {qualification.mode}</p>
                            <p>Admission Year: {qualification.admissionYear}</p>
                            <p>Passing Year: {qualification.passingYear}</p>
                            <p>Result: {qualification.result}</p>
                            <p>Percentage: {qualification.percentage}</p>
                            <p>Attempts: {qualification.attempts}</p>
                            <div>
                                <p>Uploaded Marksheet:</p>
                                <img src={qualification.marksheet} alt={`Marksheet ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                            </div>
                            <p>
                                Was any Gap in this Qualification/Course?: {qualification.gap}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderClubDetails = () => {
        if (!clubs.length) {
            return <div>No Club/Committee data submitted yet</div>;
        }
        return (
            <div className="club-details-container">
                <h2>Club/Committee Details</h2>
                {clubs.map((club, index) => (
                    <div key={index}>
                        <h3>Field {index + 1}</h3>
                        <p>Club/Committee Name: {club.clubName}</p>
                        <p>Position Held: {club.positionHeld}</p>
                        <p>Activities/Contributions: {club.activities}</p>
                        {/* Add more fields as needed */}
                    </div>
                ))}
            </div>
        );
    };


    const renderEventDetails = () => {
        if (!events.length) {
            return <div>No Event data submitted yet</div>;
        }
        return (
            <div>
                <h2>Event Details</h2>
                {events.map((event, index) => (
                    <div key={index}>
                        <h3>Field {index + 1}</h3>
                        <p>Event Name: {event.eventName}</p>
                        <p>Event Type: {event.eventType}</p>
                        <p>Other Event Type: {event.otherEventType}</p>
                        <p>Participation Level: {event.participationLevel}</p>
                        <p>Achievement: {event.achievement}</p>
                        <p>Year Participated: {event.yearParticipated}</p>
                        <div>
                            <p>Uploaded Certificate:</p>
                            <img src={event.eventCertificate} alt={`Certficate ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderCommunityServiceDetails = () => {
        if (!communityService.length) {
            return <div>No Community Service data submitted yet</div>;
        }
        return (
            <div>
                <h2>Community Service Details</h2>
                {communityService.map((activity, index) => (
                    <div key={index}>
                        <h3>Field {index + 1}</h3>
                        <p>Activity Name: {activity.activityName}</p>
                        <p>Organization: {activity.organization}</p>
                        <p>Description: {activity.description}</p>
                        <p>Duration: {activity.duration.from} to {activity.duration.to}</p>
                        <p>Impact: {activity.impact}</p>
                        <div>
                            <p>Uploaded Documentation:</p>
                            <img src={activity.csDocumentation} alt={`Certficate ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderWorkshopDetails = () => {
        if (!workshops.length) {
            return <div>No Workshop data submitted yet</div>;
        }
        return (
            <div>
                <h2>Workshop Details</h2>
                {workshops.map((workshop, index) => (
                    <div key={index}>
                        <h3>Field {index + 1}</h3>
                        <p>Title: {workshop.title}</p>
                        <p>Organizer: {workshop.organizer}</p>
                        <p>Description: {workshop.description}</p>
                        <p>Dates: {workshop.dates.from} to {workshop.dates.to}</p>
                        <p>Skills: {workshop.skills}</p>
                        <div>
                            <p>Uploaded Documentation:</p>
                            <img src={workshop.workshopDocumentation} alt={`Certficate ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };


    const renderAchievementDetails = () => {
        if (!achievements.length) {
            return <div>No Achievement data submitted yet</div>;
        }
        return (
            <div className="achievement-details-container">
                <h2>Achievement/Certification Details</h2>
                {achievements.map((achievement, index) => (
                    <div key={index}>
                        <h3><u>Achievement {index + 1}</u></h3>
                        <p>Title: {achievement.title}</p>
                        <p>Description: {achievement.description}</p>
                        <p>Achievement type: {achievement.type}</p>
                        <p>Provider/Organization: {achievement.provider}</p>
                        <p>Achievement date: {achievement.date}</p>
                        <p>Duration: {achievement.duration}</p>
                        <p>Platform: {achievement.platform}</p>
                        <p>Skills: {achievement.skills}</p>
                        <p>Certificate URL: {achievement.certificateURL}</p>
                        <div>
                            <p>Achievement Certificate:</p>
                            <img src={achievement.achievementCertificate} alt={`Certficate ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderInternshipDetails = () => {
        if (!internships.length) {
            return <div>No Internship data submitted yet</div>;
        }
        return (
            <div className="internship-details-container">
                <h2>Internship Details</h2>
                {internships.map((internship, index) => (
                    <div key={index}>
                        <h3><u>Internship {index + 1}</u></h3>
                        <p>Title: {internship.internshiptitle}</p>
                        <p>Company: {internship.company}</p>
                        <p>Start date: {internship.startDate}</p>
                        <p>End date: {internship.endDate}</p>
                        <p>Responsibilities: {internship.responsibilities}</p>
                        <p>Achievements: {internship.achievements}</p>
                        <p>Supervisor :{internship.supervisor}</p>
                        <p>Feedback :{internship.feedback}</p>
                        <div>
                            <p>Internship Certificate: </p>
                            <img src={internship.internshipCertificate} alt={`Certficate ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderExamDetails = () => {
        if (!exams.length) {
            return <div>No Exam data submitted yet</div>;
        }
        return (
            <div className="exam-details-container">
                <h2>Exam Details</h2>
                {exams.map((exam, index) => (
                    <div key={index}>
                        <h3><u>Exam {index + 1}</u></h3>
                        <p>Name: {exam.examName}</p>
                        <p>Date: {exam.examDate}</p>
                        <p>Score: {exam.score}</p>
                        <p>Rank: {exam.rank}</p>
                        <p>Percentile: {exam.percentile}</p>
                        <div>
                            <p>Uploaded Documentation:</p>
                            <img src={exam.examCertificate} alt={`Certficate ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderProjectDetails = () => {
        if (!projects.length) {
            return <div>No Project data submitted yet</div>;
        }
        return (
            <div className="project-details-container">
                <h2>Project Details</h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>Project {index + 1}</h3>
                        <p>Project Title: {project.projectTitle}</p>
                        <p>Project Description: {project.projectDescription}</p>
                        <p>Project Category: {project.projectCategory}</p>
                        <p>GitHub Repository URL: {project.githubRepoURL}</p>
                        <p>Technologies Used: {project.technologiesUsed}</p>
                        <p>Start Date: {project.startDate}</p>
                        <p>End Date: {project.endDate}</p>
                        <p>Project Team: {project.teamMembers}</p>
                        <p>Project Goals and Objectives: {project.projectGoals}</p>
                        <p>Challenges Faced: {project.challengesFaced}</p>
                        <p>License: {project.license}</p>
                        <p>References or Citations: {project.references}</p>
                        <div>
                            <p>Project Certificates:</p>
                            <img src={project.projectCertificate} alt={`Certficate ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="form-container">
            <h2>Submitted Details</h2>
            {renderPersonalDetails()}
            {renderEducationDetails()}
            {renderClubDetails()}
            {renderEventDetails()}
            {renderCommunityServiceDetails()}
            {renderWorkshopDetails()}
            {renderAchievementDetails()}
            {renderInternshipDetails()}
            {renderExamDetails()}
            {renderProjectDetails()}
            <br />
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting}) => (
                    <Form>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                        <button type="reset" onClick={() => {resetContextData();}}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ViewProfile;
