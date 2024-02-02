import React, { useState, useEffect } from "react";
import "./readme.css";

const emojiMapping = {
  "ð": "👋",
  "ð": "👀",
  "ð±": "🌱",
  "ðï¸": "💞",
  "ð«": "📫",
};

function Readme() {
  const [readme, setReadme] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "12anupa-baral";
        const repoName = "12anupa-baral";
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repoName}/readme`
        );

        if (response.status === 200) {
          const data = await response.json();
          const decodedContent = atob(data.content.replace(/\s/g, ""));
          setReadme(decodedContent.split("\n").filter(Boolean));
        } else {
          console.error("Error fetching README:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchData();
  }, []);

  const replaceEmojis = (line) => {
    for (const [encoded, emoji] of Object.entries(emojiMapping)) {
      line = line.replace(encoded, emoji);
    }
    line = line.replace(/âm/g, "'m");

    return line;
  };

  const excludedStrings = [
    "12anupa-baral/12anupa-baral is a â¨ special â¨ repository",
    "You can click the Preview link to take a look at your changes.",
    "<!---",
    "--->",
  ];

  return (
    <div className="readme">
      {readme.length > 0 && (
        <ul>
          {readme
            .filter(
              (line) => !excludedStrings.some((str) => line.includes(str))
            )
            .map((line, index) => (
              <li key={index}>{replaceEmojis(line)}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Readme;
