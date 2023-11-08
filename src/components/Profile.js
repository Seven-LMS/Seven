import React from "react";
import "../style/profilestyle.css";

// Sample profile data array
const profiles = [
    {
        sid: "2021390000",
        name: "Student Name",
        facultyMajor: "FET - CS/IS",
    },
    // Add more profiles as needed
];

function Profile() {
    return (
        <div className="content">
            {profiles.map((profile) => (
                <div className="profile" key={profile.sid}>
                    <div className="pfpleft">
                        <div className="pict">
                            <img src="https://via.placeholder.com/70" alt="Profile Picture" />
                        </div>
                        <div className="pfpinfo">
                            <div className="pname" style={{ fontSize: "14px" }}>
                                {profile.name}
                            </div>
                            <div className="psid" style={{ fontSize: "12px", fontWeight: 500 }}>
                                {profile.sid}
                            </div>
                            <div className="faculty_major" style={{ fontSize: "11px" }}>
                                {profile.facultyMajor}
                            </div>
                        </div>
                    </div>
                    <button id="change-profile-picture">
                        Change Profile Picture
                    </button>
                </div>
            ))}
            <div className="personalInfo">
                <div className="pinfohead">
                    <h2>Personal Information</h2>
                    <button type="submit" id="save-button">
                        Save Changes
                    </button>
                </div>
                <form id="profile-form">
                    <div className="dob">
                        <div>
                            <label htmlFor="date-of-birth">
                                Date of Birth:
                            </label>
                            <input
                                type="date"
                                id="date-of-birth"
                                name="date-of-birth"
                                required
                            />
                        </div>
                    </div>
                    <div className="contactinf">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                style={{ height: "25px" }}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">
                                Phone Number:
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                style={{ height: "25px" }}
                            />
                        </div>
                    </div>
                    <div className="address">
                        <div>
                            <label htmlFor="address">
                                Home Address:
                            </label>
                            <textarea id="address" name="address" rows="4" required style={{ height: "60px" }}>
                            </textarea>
                        </div>
                    </div>
                    <button type="submit" id="save-button">Save Changes</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;
