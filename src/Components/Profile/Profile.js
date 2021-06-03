import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import profile_img from "./LinkedIn_Image.jpg"
import "./Profile.css"

export default function Profile () {
    return (
        <div> 
            <Container className="intro" id="profile" style={{backgroundColor: "darkslategray", opacity: "0.9", boxShadow: "0 5px 6px #ccc"}} fluid>
                <Row>
                    <Col >
                        <Image src={profile_img} roundedCircle  style={{marginTop: "3cm", width:"300px", height:"auto", border: "6px solid floralwhite"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 style={{color: "floralwhite"}}>
                            Vitalii Kovtounenko
                        </h1>
                        <hr style={{width: "15%", border: "3px solid", color:"floralwhite"}}/>
                        <h3 style={{marginBottom: "0.5cm", color: "floralwhite"}}>
                            Bacheler of Science in Computer Science
                        </h3>
                        <h3 style={{marginBottom: "1cm", color: "floralwhite"}}>
                            Purdue University 2021
                        </h3>
                    </Col>
                </Row>
            </Container>

            <Container className="intro" id="aboutme" style={{padding: "0% 10% 0 10%", fontSize: "25px", textAlign: 'left', backgroundColor: 'floralwhite'}} fluid>
            <Row>
                <Col style={{paddingTop: "2cm", textAlign: 'center'}} lg={true}>
                    <h1 style={{color: "darkslategray"}}>About Me</h1>
                    <hr style={{width: "15%", border: "3px solid", color:"darkslategray"}}/>
                </Col>
            </Row>
            <Row>
                <Col sm={true}>
                    <p >
                        I am a Computer Science graduate from Purdue University - West Lafayette. 
                        I am very dedicated, goal oriented, and a great team player. I am passionate about technology, innovation and entrepreneurship
                        and looking forward to expand my horizon and learn new skills in software engineering. Some of my interests include cloud computing, backend and fullstack
                        development. I like to work on core functionlities of the system and be involved in the development process.
                        Currently I am seeking a full time entry level software engineering position.
                    </p>
                    <p >
                      My key personality traits are:
                    </p>
                </Col>
            </Row>
            <Row >
                <Col style={{fontSize: "25px", textAlign: 'left'}} lg={true}>
                <ul >
                        <li>
                            <b>Team Player - I enjoy working as part of a team, sharing my knowledge and learning from others</b>
                        </li>
                    </ul>
                </Col>
                <Col style={{fontSize: "25px", textAlign: 'left'}} lg={true}>
                    <ul >
                        <li>
                            <b>Goal Oriented - I am determined to meet all deadlines in order to get the job done</b>
                        </li>
                    </ul>
                </Col>
            </Row >
            <Row style={{paddingBottom: "2cm"}}>
                <Col style={{fontSize: "25px", textAlign: 'left'}} lg={true}>
                <ul>
                        <li>
                            <b>Intellectual Curiosity - I love to learn new things and always challenge myself</b>
                        </li>
                    </ul>
                </Col>
                <Col style={{fontSize: "25px", textAlign: 'left'}} lg={true}>
                    <ul>
                        <li>
                            <b>Ownership - It is important to take ownership and and always look at the big picture</b>
                        </li>
                    </ul>
                </Col>
            </Row >
        </Container>

        <Container className="intro"  id="skills" style={{padding: "0% 10% 0 10%", fontSize: "25px", textAlign: 'left', backgroundColor: 'darkslategray', color: "floralwhite", opacity: "0.9", boxShadow: "0 5px 6px #ccc"}} fluid>
            <Row>
                <Col style={{paddingTop: "2cm"}} lg={true}>
                    <h1 style={{textAlign: "center"}}>
                        Skills
                    </h1>
                    <hr style={{width: "15%", border: "3px solid", color:"floralwhite"}}/>
                  
                </Col>
            </Row>
            <Row>
                <Col lg={true}>
                    <ul>
                        <li style={{marginBottom: "0.5cm"}}>
                            <b>Programming Languages - </b>
                            Java, C/C++, Python
                        </li>
                        <li style={{marginBottom: "0.5cm"}}>
                            <b>Cloud Computing - </b>
                            AWS, Docker, Kubernetes
                        </li>
                    </ul>
                </Col>
                <Col lg={true}>
                    <ul>
                        <li style={{marginBottom: "0.5cm"}}>
                            <b>Web Development - </b>
                            Node.js, React.js, JavaScript
                        </li>
                        <li style={{marginBottom: "0.5cm"}}>
                            <b>Databases - </b>
                            MySQL, Firebase
                        </li>
                    </ul>
                </Col>
            </Row >
            <Row >
                <Col lg={true}>
                    <ul>
                        <li style={{marginBottom: "0.5cm"}}>
                            <b>Systems - </b>
                            Unix/Linux
                        </li>
                    </ul>
                </Col>
            </Row >
            <Row style={{paddingBottom: "2cm"}}>
                <Col lg={true}>
                    <ul>
                        <li style={{marginBottom: "0.5cm"}}>
                            <b>Familiar with: </b>
                            X86 Assembly programming, bash, HTML, CSS, R
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <Container className="intro"  id="projects" style={{padding: "0% 10% 0 10%", fontSize: "25px", textAlign: 'left', backgroundColor: 'floralwhite', color: "darkslategray", opacity: "0.9", boxShadow: "0 5px 6px #ccc"}} fluid>
            <Row>
                <Col style={{paddingTop: "2cm"}} lg={true}>
                    <h1 style={{color: "darkslategray", textAlign: 'center'}}>
                        Projects
                    </h1>
                    <hr style={{width: "15%", border: "3px solid", color:"darkslategray"}}/>
                </Col>
            </Row>
            <Row style={{paddingBottom: "2cm"}}>
                <Col lg={true}>
                    <ul >
                        <li style={{marginBottom: "1cm"}}>
                            <b>Hopscotch 01/2021 - 05/2021:  </b>
                            <p> Hopscotch is a one-stop shop for searching, organizing, and collaborating on trips. 
                                Hopscotch allows friends to search different features like flights, hotels,
                                dining and attractions in one place. Trip memebers can easily customize trips to their needs,
                                keep track of their trip budget, share trips with other users and vote on trip features before 
                                finalizing the trip.
                            </p>
                        </li>
                        <li style={{marginBottom: "1cm"}}>
                            <b>Cloud services 04/2021 - 05/2021:</b>
                            <p> Implemented an application that encompasses three containerized microservices; the web service, storage service
                                and compression service that communicate through RESTful requests and managed by Kubernetes. The webservice accepts requests to upload and download 
                                files, the compression service compresses the file before upload and decompresses after download, 
                                and the storage service stores the user's file as an object in an S3 bucket on AWS.</p>
                        </li>
                        <li style={{marginBottom: "1cm"}}>
                            <b>BookNet 01/2020 - 05/2020:</b>
                            <p> BookNet is a web application that allows students around campus to match with their peers based on books they need and do not need anymore.
                                A student can chat with the matches and trade or donate his/her books. 
                                This is where students can put their books into use instead of collecting dust under the bed.
                            </p>
                        </li>
                        <li style={{marginBottom: "1cm"}}>
                            <b>HTTP Server 04/2020 - 05/2020:</b>
                            <p> Implemented an HTTP and HTTPS webserver with three concurrency modes: fork, thread, and pool of threads using C/C++.
                                The fork mode creates a copy of running processes for each client. The thread mode creates a new path of execution for each client, and 
                                Pool of threads mode uses a predefined number of threads to accomodate the incoming requests from different clients which makes the server 
                                significantly more efficient.
                            </p>
                        </li>
                        <li style={{marginBottom: "1cm"}}>
                            <b>Shell 02/2020 - 04/2020:</b>
                            <p>Completed a shell interpreter that combines both bash and csh behavior using C/C++.</p>
                        </li>
                        <li style={{marginBottom: "1cm"}}>
                            <b>Malloc 01/2020 - 02/2020:</b>
                            <p>Created a memory allocator inspired by the Doug Lea memory allocator which allows users to malloc() and free() memory as needed.</p>
                        </li>
                    </ul>
                </Col>
            </Row >
        </Container>

        <Container className="intro"  id="contact" style={{backgroundColor: "#2c3e50"}} fluid>
            <Row>
                <Col style={{paddingTop: "2cm"}} lg={true}>
                    <h1 style={{color: "floralwhite"}}>
                        Contact
                    </h1>
                    <hr style={{width: "15%", border: "3px solid", color:"floralwhite"}}/>
                </Col>
            </Row>
            <Row>
                <Col style={{paddingBottom: "3cm"}} lg={true}> 
                    <b style={{color:"floralwhite", fontSize: "25px"}}>vitalykovtunenko92@gmail.com</b>
                </Col>
            </Row>
        </Container>
    </div>

    )
}