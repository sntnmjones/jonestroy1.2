import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function About() {
    return (
        <Container fluid={true}>
            <Row className='row'>
                <Col>
                    {/* My Story */}
                    <Card>
                        <Card.Header>
                            My Story
                        </Card.Header>
                        <Card.Body>
                            All my life I've been interested in computers. I can remember in grade school playing The Oregon Trail, thinking how cool it would be to make computer games. In high school, I would pick the librarians brain on different MS-DOS hacks, fostering a love for the terminal at a young age. After working in a sawmill for 14 years, I made a few Android apps to make work a little easier in the mill. One being a knot displacement calculator, another being a board footage price calculator, and another that transcribed the Lumber Gradebook into layman's terms. Seeing how useful those were and how a lot of people were using them was when I decided that I should pursue my passion fully and return to school to get my Bachelor's in Computer Science.
                        </Card.Body>
                    </Card>

                    {/* Relative Coursework */}
                    <Card className='cards'>
                        <Card.Header>
                            Relative Coursework
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <h6>CINS-370 - Introduction to Databases</h6>
                                    This course provides an introduction to the theory and methodology for database design and implementation. Topics may include a survey/lecture component as well as a project component. The survey component covers entity- relationship modeling, relational algebra and calculus theories, data definition and data manipulation languages such as SQL, file structures, transactions, concurrency control, recovery, tuning and optimization, and object-oriented databases. The project entails requirements definition, design, and implementation of a database application.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CINS-448 - Computer Security</h6>
                                    This course provides a broad overview of some of the more technical aspects of Information Systems Security. The content is designed to prepare students for the Certified Information Systems Security Professional/Associate (CISSP/A) examination from the International Information Systems Security Certification Consortium (ISP2), including a discussion of each of the following topics: security management practices; access control systems; telecommunications and network security; cryptography; security architecture and models; operations security; applications and systems development; business continuity planning and disaster recovery planning; law, investigation, and ethics; and physical security.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CINS-465 - Web Programming Fundamentals</h6>
                                    A hands-on project course that examines languages, tools, protocols, and techniques for developing interactive and dynamic web applications.  Topics include the model-view-controller pattern, server side and client side scripting, using a server side database, web applications security, and dynamic page styling, design, and layout.  The course includes several web projects using a web programming framework.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CINS-570 - Advanced Database Management Systems
</h6>
                                    Course topics include database application programming using a high performance, high concurrency multi-user database management system. This course covers the SQL programming language including Data Definition Language, Data Manipulation Language, and Data Control Language. The course then focuses on a procedural database programming language including control structures, composite datatypes, explicit cursors, exception handling, and writing embedded SQL applications.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-311 - Algorithms and Data Structures
</h6>
                                    This course focuses on object-oriented methodologies in designing and implementing a variety of data structures and algorithms. Coverage includes recursion, trees, search structures, hashing, heaps, sorting algorithms, and graph algorithms. Data structure and algorithm combinations will be studied and analyzed along with their relative merits using both mathematical and empirical measurements. The course includes a number of large programming assignments focusing on object-oriented software engineering and algorithm development. Students will be required to design, implement, test, and analyze their programs in at least one object-oriented language.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-340 - Operating Systems

</h6>
                                    Operating system fundamentals, including history, process and thread management, concurrency with semaphores and monitors, deadlocks, storage management, file systems, I/O, and distributed systems.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-344 - Shell Programming</h6>
                                    Shell programming provides an easy means to perform a wide range of text/data manipulation, system administration, network administration, and software development tasks in the UNIX, Linux, and Windows environments. This course provides an introduction to shell programming and the types of problems for which it is well suited. Topics include regular expressions, advanced UNIX/Linux utilities, the Bash scripting language, and the Perl programming language. Students solve a variety of tasks using UNIX/Linux utilities, Bash Script, and Perl. This course is recommended for students pursing careers in software development, information technology, and information systems.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-430 - Software Engineering</h6>
                                    An overview of software engineering principles, practice, and tools.  Topics include: agile software engineering methodologies, requirements engineering, test-driven development, software design patterns, MVC architecture, version control, software metrics, and static analysis.  Students work in groups to design and implement a semester-long open source software project.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-446 - Introduction to Computer Networks and Network Management
</h6>
                                    This course is an introduction to basic networking technologies and network management concepts, including major network operating systems, communication architecture focusing on ISO and Internet models with discussion of current standards and protocols.  Significant laboratory work using current networking equipment reinforces lectures and provides fundamental experience with router and switch management.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-515 - Compiler Design</h6>
                                    The elements of lexical, syntactical, and semantic analysis including finite and push-down automata, top-down and bottom-up parsing, error detection and recovery, semantic actions and code generation.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-550 - Introduction to Design and Analysis of Algorithms
</h6>
                                    Students design, implement, and analyze algorithms for solving problems.  Topics include dynamic programming, graphs (topological sort, strongly connected components), shortest paths (Bellman-Ford, Floyd-Warshall), minimum spanning tree (Kruskal's), flow network (max flow, min cut, maximum bipartite matching), string search (suffix tree, suffix array, Burrows-Wheeler's Transform, longest common prefix array).  In addition, basic automata computability and complexity are covered, including finite automata, regular expressions, context free grammars, Turing machines, P and NP classes, and NP complete classes and problems.  This course integrates knowledge of data structures, algorithms, and programming.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-551 - Numerical Methods and Parallel Programming</h6>
                                    Surveys numerical methods and parallel programming. Parallel architectures and algorithms for scientific programming applications, solution of simultaneous linear and non-linear equations, iterative techniques, matrix methods, and error analysis. Development of parallel algorithms, with a focus on efficient implementation and performance.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>CSCI-580 - Artificial Intelligence</h6>
                                    An introduction to the basic principles, techniques, and applications of Artificial Intelligence. Coverage includes knowledge representation, logic, inference, problem solving, search algorithms, game theory, perception, learning, planning, and agent design. Students will program with AI language tools. Additional areas may include expert systems, machine learning, natural language processing, and computer vision.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>EECE-237 - Embedded Systems Development</h6>
                                    This course presents the concepts and techniques associated with developing low level Embedded Systems Applications, using both Assembly Language and C. Topics include microprocessor architecture concepts, instruction set architectures, Assembly Language programming, data representations, interrupt handling and execution modes, low level C programming, and the use of on-chip and external peripherals.
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h6>EECE-320 - System Architecture and Performance</h6>
                                    Study of computing architecture and how the structure of various hardware and software modules affects the ultimate performance of the total system. Topics include qualitative and quantitative analysis of bandwidths, response times, error detection and recovery, interrupts, and system throughput; distributed systems and coprocessors; vector and parallel architectures.
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
