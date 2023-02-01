import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {
  const projects = [
    {
      imageUrl:
        "https://res.cloudinary.com/dmk0brpcn/image/upload/v1674467638/Screenshot_20230123-150611_2_ttzwck.png",
      title: "Nxt Watch(Youtube Clone)",
      description:
        "React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication",
      site: "https://akshaytube.ccbp.tech",
      git: "https://github.com/Akshaygwda/NxtWatch",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dmk0brpcn/image/upload/v1674467895/Screenshot_20230123-152737_2_csa5tg.png",
      title: "Movies App(Netflix Clone)",
      description:
        "HTML, CSS, JavaScript, React JS, Bootstrap, React Slick, Figma, client storage",
      site: "https://moviestar.ccbp.tech",
      git:
        "https://github.com/Akshaygwda/MOVIES-APP-NETFLIX-AMAZON-PRIME-CLONE-",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dmk0brpcn/image/upload/v1674468236/Screenshot_20230123-153320_2_bkh0fb.png",
      title: "E-Com App",
      description:
        "React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication",
      site: "https://akshayecomapp.ccbp.tech",
      git: "https://github.com/Akshaygwda/NxtTrendz-EcommerceApp",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dmk0brpcn/image/upload/v1674468462/Screenshot_20230123-153712_2_ndw3h0.png",
      title: "Rock Paper Scissor Game",
      description: "React JS, CSS, Bootstrap",
      site: "https://rockpsgame.ccbp.tech",
      git: "https://github.com/Akshaygwda/Rock-Paper-Scissors",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dmk0brpcn/image/upload/v1674468644/Screenshot_20230123-154014_2_ot5sk7.png",
      title: "Todo App",
      description: "HTML, CSS, JS, Bootstrap",
      site: "https://akshaystodo.ccbp.tech",
      git: "https://github.com/Akshaygwda?tab=repositories",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dmk0brpcn/image/upload/v1674468937/Screenshot_20230123-154457_2_mxnle4.png",
      title: "All My Small Projects List",
      description: "React JS, CSS, Bootstrap",
      site: "https://akshaysprojects.ccbp.tech",
      git: "https://github.com/Akshaygwda/My-Frontend-Projects",
    },
  ];

  const educations = [
    {
      course: "Certification-MERN Stack",
      college: "Nxtwave CCBP 4.0",
    },
    {
      course: "Master of Science(M.Sc)-Electronics",
      college: "Kuvempu University",
    },
    {
      course: "Bachelor of Science(B.Sc)-PCM",
      college: "Kodachadri Govt College",
    },
  ];

  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About</h2>
                  <p>
                    A tech enthusiast guy who developed interest in developing futuristic web apps
                    and these tabs gives details about my projects, education and experience
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {educations.map((education, index) => {
                            return <EducationCard key={index} {...education} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="exp-card">
                          <h3 style={{ color: "#cd5ff8" }}>
                            Exozen Smart Society Solution Provider
                          </h3>
                          <h5 style={{ color: "red" }}>
                            Frontend Developer (Aug 2022 - Present)
                          </h5>
                          <p>
                            My role is to develop dashboards, which gives the
                            live data from IoT devices installed at client
                            location all across the India.
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
