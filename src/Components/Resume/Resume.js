import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import resume from './Public_Resume.pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


export default function Resume() {


  return (
    <div>
        <Container>
            <Row>
                <Col style={{marginLeft: "20%", marginRight: "2%"}}>
                  <a href={resume}>Resume</a>
                </Col>
            </Row>
        </Container>
    </div>
  );
}