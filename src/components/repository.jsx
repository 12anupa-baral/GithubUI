import React from "react";
import "./repository.css";
import useRepositories from "./userepository";
import { useTheme } from "./theme";

function Repo() {
  const username = "12anupa-baral";
  const repositories = useRepositories(username);
  // const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      {/* <div className={isDarkMode ? "dark" : "light"}> */}
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
      {/* </div> */}
    </>
  );
}

export default Repo;
