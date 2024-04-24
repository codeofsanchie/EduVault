import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';
import { TempStorage } from './TempStorage';

const ViewProfile = () => {
    const location = useLocation();
    const {
        personalDetails, currentCourseData, pastQualificationData,
        achievementData, internshipData, examData,
        clubData, eventData, communityServiceData, workshopData, projectData
    } = useContext(TempStorage);
    const combinedData = location.state?.combinedData || null;

    // Ensure Data are arrays
    const personalDetailsData = personalDetails || location.state?.personalDetails || {};
    const currentCourse = currentCourseData || location.state?.currentCourseData || {};
    const pastQualification = Array.isArray(pastQualificationData) ? pastQualificationData : [];
    const clubs = Array.isArray(clubData) ? clubData : [];
    const events = Array.isArray(eventData) ? eventData : [];
    const communityServices = Array.isArray(communityServiceData) ? communityServiceData : [];
    const workshops = Array.isArray(workshopData) ? workshopData : [];
    const achievements = Array.isArray(achievementData) ? achievementData : [];
    const internships = Array.isArray(internshipData) ? internshipData : [];
    const exams = Array.isArray(examData) ? examData : [];
    const projects = Array.isArray(projectData) ? projectData : [];

    if (!personalDetailsData
        && !currentCourse
        && !pastQualification.length
        && !achievements.length
        && !internships.length
        && !exams.length
        && !clubs.length
        && !events.length
        && !communityServices.length
        && !workshops.length
        && !projects.length) {
        return <div>No data submitted yet</div>;
    }

        const renderPersonalDetails = () => {
            const hasAnyField = Object.values(personalDetailsData).some(field => field);
            if (!hasAnyField) {
                return <div>No Personal data submitted yet</div>;
            }
            return (
                <div>
                    <h2>Personal Details</h2>
                    <p>Name: {personalDetailsData.studentName}</p>
                    <p>Date of Birth: {personalDetailsData.dob}</p>
                    {/* Add more fields as needed */}
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
            <div>

                <div>
                    <h2>Current Course Details</h2>
                    <p>Admission Year: {currentCourse.admissionYear}</p>
                    <p>Institute State: {currentCourse.instituteState}</p>
                    {/* Add more fields as needed */}
                </div>
                <div>
                    <h2>Past Qualification Details</h2>
                    {pastQualification.map((qualification, index) => (
                        <div key={index}>
                            <h3>Qualification {index + 1}</h3>
                            <p>Qualification Level: {qualification.qualificationLevel}</p>
                            <p>Stream: {qualification.stream}</p>
                            {/* Add more fields as needed */}
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
            <div>   
                <h2>Club/Committee Details</h2>
                {clubs.map((club, index) => (
                    <div key={index}>
                        <h3>Field {index + 1}</h3>
                        <p>Club/Committee Name: {club.clubName}</p>
                        <p>Position Held: {club.positionHeld}</p>
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
                        <p>Certificate: {event.certificate}</p>
                        {/* Add more fields as needed */}
                    </div>
                ))}
            </div>
        );
    };
    
    const renderCommunityServiceDetails = () => {
        if (!communityServices.length) {
            return <div>No Community Service data submitted yet</div>;
        }
        return (
            <div>
                <h2>Community Service Details</h2>
                {communityServices.map((service, index) => (
                    <div key={index}>
                        <h3>Field {index + 1}</h3>
                        <p>Activity Name: {service.activityName}</p>
                        <p>Organization: {service.organization}</p>
                        <p>Description: {service.description}</p>
                        <p>Duration: {service.duration.from} to {service.duration.to}</p>
                        <p>Impact: {service.impact}</p>
                        <p>Documentation: {service.documentation}</p>
                        {/* Add more fields as needed */}
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
                        <p>Documentation: {workshop.documentation}</p>
                        {/* Add more fields as needed */}
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
            <div>
                <h2>Achievement/Certification Details</h2>
                {achievements.map((achievement, index) => (
                    <div key={index}>
                        <h3>Achievement {index + 1}</h3>
                        <p>Title: {achievement.title}</p>
                        <p>Description: {achievement.description}</p>
                        <p>Certificate URL: {achievement.certificateURL}</p>
                        {/* Add more fields as needed */}
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
            <div>
                <h2>Internship Details</h2>
                {internships.map((internship, index) => (
                    <div key={index}>
                        <h3>Internship {index + 1}</h3>
                        <p>Title: {internship.internshiptitle}</p>
                        <p>Company: {internship.company}</p>
                        {/* Add more fields as needed */}
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
            <div>
                <h2>Exam Details</h2>
                {exams.map((exam, index) => (
                    <div key={index}>
                        <h3>Exam {index + 1}</h3>
                        <p>Name: {exam.examName}</p>
                        <p>Date: {exam.examDate}</p>
                        <p>Score: {exam.score}</p>
                        <p>Rank: {exam.rank}</p>
                        <p>Percentile: {exam.percentile}</p>
                        {/* Add more fields as needed */}
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
            <div>
                <h2>Project Details</h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>Project {index + 1}</h3>
                        <p>Project Title: {project.projectTitle}</p>
                        {/* Add more fields as needed */}
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

        </div>
    );
};

export default ViewProfile;