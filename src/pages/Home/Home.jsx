import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Card, Modal } from 'react-bootstrap';

import './Home.css'

function Home() {
    // State to control the modal visibility
    const [show, setShow] = useState(false);

    // Functions to handle modal open and close
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='home-container'>
            <h1 className='home-title'>Introduce Yourself</h1>
            <Container className="mt-5">
                <Row className="align-items-center">
                    <Col md={4} className="text-center">
                        <Image src='src\assets\stdempimg.jpg' roundedCircle fluid alt="Woradech Ardvichai" />
                    </Col>
                    <Col md={8}>
                        <h2>Hello, I'm Woradech Ardvichai!</h2>
                        <p>
                            I'm the Great Imitator Developer, passionate about codding. With experience in
                            imitate what is seen with my passion, I enjoy working on projects that solve real-world problems.
                        </p>
                        <p>
                            In my free time, I love to improve myself, and I am always looking to collaborate on
                            exciting projects!
                        </p>
                        <Button variant="primary" onClick={handleShow}>
                            Check out my skills
                        </Button>
                    </Col>
                </Row>

                {/* Optional: About Me Section */}
                <Row className="mt-5">
                    <Col>
                        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                            <Card.Body>
                                <Card.Title>About Me</Card.Title>
                                <Card.Text>
                                    I started my journey in Sripatum University in 2023 and have been growing my skills ever since.
                                    My expertise lies in my dreams, and I’m continuously learning new technologies
                                    to stay up-to-date with the industry.
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
                            <li>Pyton</li>
                            <li>Machine Learning (Python)</li>
                            {/* Add more learning skills here */}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
}

export default Home;