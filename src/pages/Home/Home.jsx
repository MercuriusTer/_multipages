import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Card, Modal } from 'react-bootstrap';
import './Home.css';

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="home-container">
            <h1 className="home-title neon-text">My Profile</h1>
            <Container className="mt-5">
                <Row className="align-items-center">
                    <Col md={4} className="text-center">
                        <Image
                            src="https://mercuriuster.github.io/_multipages/stdempimg.jpg"
                            roundedCircle
                            fluid
                            className="profile-pic"
                            alt="Woradech Ardvichai"
                        />
                    </Col>
                    <Col md={8} className="info-col">
                        <h2 className="intro-text">Hello, I'm Woradech Ardvichai!</h2>
                        <p className="description">
                            I'm the Great Imitator Developer, passionate about coding and solving real-world problems.
                            I enjoy working on projects that make an impact.
                        </p>
                        <p className="description">
                            In my free time, I love to improve myself and collaborate on exciting projects.
                        </p>
                        <Button variant="primary" className="primary-btn" onClick={handleShow}>
                            <span className="bi bi-lightning-charge"></span> Check out my skills
                        </Button>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <Card className="about-card">
                            <Card.Body>
                                <Card.Title className="card-title">About Me</Card.Title>
                                <Card.Text>
                                    I started my journey in Sripatum University in 2023 and have been growing my skills
                                    ever since. My expertise lies in my dreams, and I’m continuously learning new technologies to stay up-to-date with the industry.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Modal for displaying skills */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>My Skills & Expertise</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Programming Languages:</h5>
                        <ul>
                            <li>HTML, CSS</li>
                            <li>JavaScript (React, Node.js)</li>
                            <li>Machine Learning (RVC)</li>
                            <li>Java</li>
                        </ul>
                        <h5>Technologies & Tools:</h5>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Git/GitHub</li>
                            <li>Adobe Photoshop</li>
                            <li>CapCut</li>
                            <li>Notion</li>
                        </ul>
                        <h5>Skills in Progress:</h5>
                        <ul>
                            <li>SQL</li>
                            <li>TypeScript</li>
                            <li>Docker</li>
                            <li>Python</li>
                            <li>Machine Learning (Python)</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <span></span>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
}

export default Home;
