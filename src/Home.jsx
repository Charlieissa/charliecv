import React from "react";
import "./Home.css"; // Import the CSS file
import Navbar from "./Navbar.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "home",
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(section) {
    this.setState({ activeSection: section });
  }

  render() {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="scroll-to-top-container">
            <button onClick={scrollToTop}>Scroll to Top</button>
          </div>

          <section
            id="home"
            className={"home"}
            style={{ visibility: "hidden" }}
          >
            <p>
              Hello im Charlie , a dedicated and seasoned software engineer with
              a robust expertise in web development and Python programming.
              Throughout my journey, Ive engaged in a diverse spectrum of
              projects, ranging from architecting scalable web applications to
              engineering sophisticated Python automation scripts.
            </p>
          </section>
          <section id="Experience" className={"Experience"}>
            <p>
              <strong>Experience</strong>
            </p>
            <p>
              <strong>Data Collection Intel RealSense</strong>
              <br></br>
              <strong>07/2023 - Present</strong>
            </p>
            <ul>
              <li>
                Primary responsibility to work on data collection via ROS/Rover
                robot, using semi and fully automated approaches.
              </li>
              <li>
                Implementing Python scripts and automation environment on Python
                towards data collection.
              </li>
              <li>
                Responsible for post-analysis of data correctness and its
                preparation for IQ (image quality team) real usage.
              </li>
              <li>
                Responsible for maintaining and keeping up and running Rover
                robot for various test/data collection scenarios.
              </li>
              <li>
                Working closely with IQ team and their requirements to provide
                better collaboration with Core Automation team at RealSense
                Validation group.
              </li>
              <li>
                Executing some basic data collection test scenarios on RealSense
                cameras family, providing feedback to Dev Group.
              </li>
              <li>
                Utilizing RealSense Python API to work with Depth/IR/Safety
                data.
              </li>
              <li>Laboratory test scenarios execution with Rover Robot.</li>
            </ul>
          </section>
          <section id="skills" className={"skills"}>
            <p>
              <strong>Skills</strong>
            </p>
            <ul>
              <li>
                Basic interoperability level with ROS (Robot Operating System).
              </li>
              <li>
                General knowledge of Networking and OSI model with hardware
                environment Level 2/3. CCNA Diploma from Cisco in a relative
                domain.
              </li>
              <li>Operating systems: Linux and Windows.</li>
              <li>
                Manual and automated testing of low-level components and GUI
                applications.
              </li>
              <li>Experience with version control systems: Git and GitHub.</li>
              <li>
                Proficient in using project management tools such as Jira and
                Confluence.
              </li>
              <li>
                Proficient in using integrated development environments (IDEs)
                including PyCharm, CLion, Visual Studio, and Eclipse.
              </li>
            </ul>
          </section>
          <section id="programmingLanguage" className={"programmingLanguage"}>
            <p>
              <strong>Programming Languages</strong>
            </p>
            <ul>
              <li>
                Proficiency in Python and Java with 2 years of experience.
              </li>
              <li>
                Proficiency in Full Stack Development (HTML, CSS, JavaScript,
                Node.js, SQL) with 2+ years of experience.
              </li>
              <li>Basic level proficiency in C/C++ and Bash.</li>
            </ul>
          </section>
          <section id="education" className={"education"}>
            <p>
              <strong>Education</strong>
            </p>
            <p>2021-2023 – Software Practical Engineering, Technion</p>
            <p>GPA: 93</p>
            <p>Courses:</p>
            <ul>
              <li>Data Structures</li>
              <li>Operating Systems</li>
              <li>Java</li>
              <li>C++</li>
              <li>Python</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Quality Assurance (QA)</li>
              <li>SQL</li>
            </ul>
            <p>Projects:</p>
            <ul>
              <li>
                Final Project - home.co.il
                <ul>
                  <li>
                    Collaborated with a partner to develop and implement an
                    online shop for a website built from scratch, according to
                    customer needs.
                  </li>
                  <li>
                    Utilized JavaScript, React, Node.js, SQL, HTML, and CSS to
                    create a seamless and user-friendly online shopping
                    experience.
                  </li>
                  <li>
                    Conducted rigorous testing and debugging to ensure the
                    websites functionality and security.
                  </li>
                  <li>
                    Strengthened collaboration and project management skills,
                    communicating effectively with the partner and adapting to
                    new requirements and changes throughout the development
                    process.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
