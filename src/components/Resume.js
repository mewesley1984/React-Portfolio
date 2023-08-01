import "./Resume.css";

import "./Resume.css";
const Resume = () => {
  return (
    <div className="resume">
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>MERN</li>
      </ul>
      <h2>Please click the link to view my resume below:</h2>
      <a href="/resume.pdf" download>
        DOWNLOAD MY RESUME
      </a>
    </div>
  );
};

export { Resume };
