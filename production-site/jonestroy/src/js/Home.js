import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Home.css';

function Home() {

    return (
        <Container fluid={true}>

            {/* Intro */}
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            Listed below are just some things I find interesting. If you are looking for the courses I've taken, projects I've completed, or links to my Github or LinkedIn, please consult the navbar.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Interesting Items */}
            <Row className='row'>

                {/* Monterey */}
                <Col md={12} lg={6}>
                    <Card className='cards'>
                        <Card.Img variant="bottom" src={require('../images/Monterey-1920x1080.jpg')} alt='bixby bridge' />
                        <Card.Body>
                            <Card.Title><a href='https://www.monterey.org'>Monterey, CA</a></Card.Title>
                            <Card.Text>
                                The goal. This is the ultimate destination for our family to reside. The picture shown is of Bixby bridge. An icon of the Monterey Bay area.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Motorsports */}
                <Col md={12} lg={6}>
                    <Card className='cards'>
                        <Card.Img variant="bottom" src={require('../images/corkscrew-1920x1080.jpg')} alt='race cars on the corkscrew' />
                        <Card.Body>
                            <Card.Title><a href='https://www.motorsport.com'>Motorsports</a></Card.Title>
                            <Card.Text>
                                We LOVE racing. My dream would be to work on a race team. Having raced karts, we have a deep appreciation for motorsports. We try to attend all our local venues that host IndyCar, MotoGP, etc.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Snowboarding */}
                <Col md={12} lg={6}>
                    <Card className='cards'>
                        <Card.Img variant="bottom" src={require('../images/snowboard-1920x1080.jpg')} alt='matrix code' />
                        <Card.Body>
                            <Card.Title>Snowboarding</Card.Title>
                            <Card.Text>
                                When you get strapped into your board and edge over the summit, all that there is at that moment is you and the slope. That escape is spiritual.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Code */}
                <Col md={12} lg={6}>
                    <Card className='cards'>
                        <Card.Img variant="bottom" src={require('../images/code-1920x1080.jpg')} alt='matrix code' />
                        <Card.Body>
                            <Card.Title>Programming!</Card.Title>
                            <Card.Text>
                                And of course programming! Software development is the closest thing to wizardary next to Harry Potter movies. I love programming. It is jaw dropping the things that can be done with code.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
