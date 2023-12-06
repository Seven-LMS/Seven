import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios to make HTTP requests
import "../style/profilestyle.css";

function Profile({userData}) {
    const [profiles, setProfiles] = useState([]);
    const [updatedData, setUpdatedData] = useState({}); // Add a state for updated data

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/getProfile/`+userData);
                setProfiles(response.data);

                const profileData = response.data[0];
                setUpdatedData({
                dob: profileData.dob
                ? new Date(profileData.dob).toLocaleDateString("en-CA")
                : "",
                email: profileData.email || '',
                phone: profileData.phone || '',
                address: profileData.address || '',
                });
        
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }
        };

        fetchProfiles();
    }, [userData]); // This hook fetches profiles when the component mounts

    const handleSaveChanges = async (userId) => {
        try {
            // Update user profile data
            console.log('Updating profile for user ID:', userId);
            console.log('Updated data:', updatedData);
    
            const updateResponse = await axios.put(`http://localhost:3005/updateProfile/${userId}`, updatedData);
            console.log('Update response:', updateResponse);
            console.log('SID :', userId)
    
            // Optionally, you can fetch profiles again to reflect the changes immediately
            const response = await axios.get(`http://localhost:3005/getProfile/${userId}`);
            console.log('Fetch response after update:', response);
    
            setProfiles(response.data);
    
            // Display alert and delay refresh for 2 seconds (2000 milliseconds)
            alert('Profile updated successfully!');
            setTimeout(() => {
                window.location.reload(); // Reload the page after 2 seconds
            }, 2000);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };            
      
      const handleFileUpload = async (file, userId) => {
        try {
          const formData = new FormData();
          formData.append('picture', file);
      
          // Upload file to the server
          const response = await axios.post(`http://localhost:3005/uploadPicture/${userId}`, formData);
      
          // Get the file location from the server response directly
          const pictureLocation = response.data;
      
          // Do something with the pictureLocation, e.g., update the state
          setUpdatedData((prevData) => ({
            ...prevData,
            picture: pictureLocation,
          }));
        } catch (error) {
          console.error('Error uploading picture:', error);
        }
      };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    return (
        <div className="content">
            {profiles.map((profile) => (
                <div className="profile" key={profile.sid}>
                    <div className="pfpleft">
                        <div className="pict">
                            <img src={`http://localhost:3005/${profile.picture}`} alt="Profile Picture"/>
                        </div>
                        <div className="pfpinfo">
                            <div className="pname" style={{ fontSize: "14px" }}>
                                {profile.name}
                            </div>
                            <div className="psid" style={{ fontSize: "12px", fontWeight: 500 }}>
                                {profile.sid}
                            </div>
                            <div className="faculty_major" style={{ fontSize: "11px" }}>
                                {profile.major} 
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
                                name="dateOfBirth"
                                required
                                value={updatedData.dob}
                                onChange={handleInputChange}
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
                                value={updatedData.email}
                                onChange={handleInputChange}
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
                                value={updatedData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="address">
                        <div>
                            <label htmlFor="address">
                                Home Address:
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                rows="4"
                                required
                                style={{ height: "60px" }}
                                value={updatedData.address}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit" onClick={() => handleSaveChanges(profiles.sid)}>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Profile;