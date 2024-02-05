import { useState, useEffect } from "react";

function useRepositories(username) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();

        if (data.length > 0) {
          setRepositories(data);
        } else {
          setRepositories([]);
        }
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };

    fetchData();
  }, [username]);

  return repositories;
}

export default useRepositories;
