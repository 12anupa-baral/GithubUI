import React, { useState, useEffect } from "react";
import "./profile.css";

function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState(null);
  const [bio, setBio] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [location, setlocation] = useState(null);
  const [achievement, setachievement] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "12anupa-baral";
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setAvatar(data.avatar_url);
        setUsername(data.name);
        setlocation(data.location);
        setBio(data.bio);
        setFollowers(data.followers);
        setFollowing(data.following);
        setachievement(data.achievement);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  return (
    <>
      <div className="profile">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className="user">{username}</div>
        <div className="location">{location}</div>
        <div className="bio">
          <p>{bio}</p>
        </div>
        <input type="button" className="btn" value="Edit Profile"></input>
        <div className="location"></div>
        <div className="follow">
          <div className="follower">Followers {followers}</div>
          <div className="following">Following {following}</div>
        </div>
        <div className="achievement">{achievement}</div>
      </div>
    </>
  );
}

export default Profile;
