import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
import useUserProfile from "./userprofile";

function Profile() {
  const username = "12anupa-baral";
  const userProfile = useUserProfile(username);

  return (
    <>
      <div className="profile">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${userProfile.avatar})` }}
        ></div>
        <div className="user">{userProfile.username}</div>
        <div className="location">{userProfile.location}</div>
        <div className="bio">
          <p>{userProfile.bio}</p>
        </div>
        <input type="button" className="btn" value="Edit Profile" />
        <div className="follow">
          <div className="follower">
            <FontAwesomeIcon icon={faUsers} />
            Followers {userProfile.followers}
          </div>
          <div className="following">
            <FontAwesomeIcon icon={faUserGroup} />
            Following {userProfile.following}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
