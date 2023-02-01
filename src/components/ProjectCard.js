import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export const ProjectCard = ({ title, description, imageUrl, site, git }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span style={{ color: "black" }}>
            <span style={{ color: "white" }}>TechStack:&nbsp;</span>
            {description}
          </span>
          <div>
            <br />
            <Button variant="primary" href={git} target="_blank">
              <BsGithub /> &nbsp;
              {"Github"}
            </Button>
            {"\n"}
            {"\n"}
            <Button
              variant="primary"
              href={site}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
