import { Col } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

export const EducationCard = ({ course, college, grade }) => {
  return (
    <div className="edu-card">
      <div className="img-card">
        <FaGraduationCap /> &nbsp;<h4>{course}</h4>
      </div>
      <h5 style={{ color: "#cd5ff8" }}>{college}</h5>
      <br />
    </div>
  );
};
