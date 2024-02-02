import React, { useState, useEffect } from "react";
import "./nav.css";

function Nav() {
  const [repositories, setRepositories] = useState([]);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "12anupa-baral";
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setRepositories(data);

            // Calculate total stars
            const stars = data.reduce(
              (acc, repo) => acc + repo.stargazers_count,
              0
            );
            setTotalStars(stars);
          } else {
            setRepositories([]);
          }
        } else {
          console.error("Error fetching repository data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="navbar">
          <a className="Overview" href="#">
            Overview
          </a>

          <a href="#">
            <div className="repository">
              Repositories: {repositories.length}
            </div>
          </a>
          <a href="#">
            <div className="star">Total Stars: {totalStars}</div>
          </a>
          <a className="Project" href="#">
            Project
          </a>
          <a className="Packages" href="#">
            Packages
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
