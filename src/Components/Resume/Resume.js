import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container, Row, Col } from 'react-bootstrap'
import resume from './Public_Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    
  }

  return (
    <div>
        <Container>
            <Row>
                <Col style={{marginLeft: "20%", marginRight: "2%"}}>
                    <Document 
                        file={resume}
                        onLoadSuccess={onDocumentLoadSuccess}
                        scale="10"
                    >
                        <Page pageNumber={pageNumber} style={{size: "A4"}} />
                    </Document>
                </Col>
            </Row>
        </Container>
    </div>
  );
}