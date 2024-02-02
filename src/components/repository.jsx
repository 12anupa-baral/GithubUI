import React, { useState, useEffect } from "react";
import "./repository.css";

function Repo() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "12anupa-baral";
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
  }, []);

  return (
    <>
      {repositories.map((repo) => (
        <div className="container" key={repo.id}>
          <div className="reposit">
            <div className="title">{repo.name}</div>
            <div className="brief">{repo.description}</div>
            <div className="details">
              <div className="stars">Stars: {repo.stargazers_count}</div>
              <div className="view">View: {repo.watchers_count}</div>
              <div className="language">Language: {repo.language}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Repo;
