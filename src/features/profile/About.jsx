import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import "./about.scss";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="grid lg:grid-cols-2 gap-6 lg:gap-y-0 h-full"
        id="about_page"
      >
        {/* left section */}
        <div className="my-auto">
          <div>
            <h1 className="mb-6">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>

            <p>
              As an aspiring frontend developer, I am eager to secure a position
              within a well-established IT company where I can apply my skills
              in crafting engaging and user-friendly interfaces.
            </p>
            <br />

            <p>
              Focused on honing my expertise in front-end technologies, I am
              committed to staying at the forefront of industry trends and
              continuously expanding my skill set. Proficient in HTML, CSS, and
              JavaScript, I am prepared to take on challenges related to
              creating visually appealing and seamless user experiences.
            </p>
            <br />

            <p>
              Fueled by a genuine passion for design and a relentless pursuit of
              excellence, I am enthusiastic about contributing to innovative
              projects and leaving a positive mark as a frontend developer in a
              dynamic IT environment.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="my-auto mx-auto py-52 lg:py-0">
          <div className="cube_spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#1E3050" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
