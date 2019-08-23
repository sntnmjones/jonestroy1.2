import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Python Web Scraper</Card.Title>
                            <Card.Text>
                                Rudimentary web scraper using Beautiful Soup. Variables must be entered in code in main() before execution. Updates coming. To execute, use command `python3 lab9.py` in linux terminal.

                            </Card.Text>
                            <Button href='https://github.com/sntnmjones/CSCI344-Web-Scraper/blob/master/lab9.py'>Go to Github page</Button>
                        </Card.Body>
                    </Card>

                    <Card className='cards'>
                        <Card.Body>
                            <Card.Title>ReactJS Tutorial</Card.Title>
                            <Card.Text>
                                A TicTacToe Board tutorial through the react website.
                            </Card.Text>
                            <Button href='/projects/react-tut'>Go to React Tutorial</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
