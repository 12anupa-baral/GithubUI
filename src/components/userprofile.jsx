import { useState, useEffect } from "react";

function useUserProfile(username) {
  const [userProfile, setUserProfile] = useState({
    avatar: null,
    username: null,
    bio: null,
    followers: null,
    following: null,
    location: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();

        setUserProfile({
          avatar: data.avatar_url,
          username: data.name,
          location: data.location,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [username]);

  return userProfile;
}

export default useUserProfile;
